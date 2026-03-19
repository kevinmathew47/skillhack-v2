import { NextResponse } from "next/server";

const MILAAP_URL = "https://milaap.org/fundraisers/support-syam-kumar-s-s";

function parseSupportersCount(html, jsonData) {
  // Try from JSON first
  if (jsonData) {
    if (jsonData.supporters_count) return parseInt(jsonData.supporters_count, 10);
    if (jsonData.donors_count) return parseInt(jsonData.donors_count, 10);
  }

  // Try various HTML patterns
  const m1 = html.match(/<span[^>]*class="donation-count"[^>]*>([\d,]+)/i);
  if (m1) return parseInt(m1[1].replace(/,/g, ""), 10);

  const m2 = html.match(/([\d,]+)\s+supporters/i);
  if (m2) return parseInt(m2[1].replace(/,/g, ""), 10);

  return null;
}

function parseHtml(html) {
  let jsonData = null;
  const campaignMatch = html.match(/id="campaign-data"[^>]*>([\s\S]*?)<\/script>/i);
  if (campaignMatch) {
    try {
      jsonData = JSON.parse(campaignMatch[1]);
    } catch (_) {}
  }

  let amount = null;
  if (jsonData?.donorCostBreakupData?.fund_raised) {
    amount = parseInt(jsonData.donorCostBreakupData.fund_raised.replace(/[^\d]/g, ""), 10);
  }

  if (amount === null) {
    const m1 = html.match(/"fund_raised"\s*:\s*"[₹Rs.\s]*([\d,]+)"/i);
    if (m1) amount = parseInt(m1[1].replace(/,/g, ""), 10);
  }

  if (amount === null) {
    const m4 = html.match(/Rs\.\s*([\d,]+)/i);
    if (m4) amount = parseInt(m4[1].replace(/,/g, ""), 10);
  }

  return { amount, jsonData };
}

export async function GET() {
  try {
    const response = await fetch(MILAAP_URL, {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 300 },
    });

    if (!response.ok) throw new Error(`Milaap responded with ${response.status}`);

    const html = await response.text();
    const { amount, jsonData } = parseHtml(html);
    const supporters = parseSupportersCount(html, jsonData);

    if (amount === null) throw new Error("Could not parse raised amount");

    return NextResponse.json({
      amount,
      supporters: supporters || 11, // Fallback to 11 if parsing fails
      ts: Date.now(),
    });
  } catch (error) {
    console.error("[API/Milaap] Error:", error.message);
    return NextResponse.json(
      { error: "Failed to fetch data from Milaap", details: error.message },
      { status: 500 }
    );
  }
}
