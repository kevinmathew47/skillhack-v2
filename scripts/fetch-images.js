const fs = require('fs');
const https = require('https');
const http = require('http');

// Hardcode the 8 article URLs to avoid import issues
const articles = [
  "https://englisharchives.mathrubhumi.com/news/good-news/kerala-flood-2019-shyam-kumar-amputee-helping-out-in-flood-relief-collection-centre-thomas-isaac-b7c0c24d",
  "https://www.etvbharat.com/english/state/kerala/amputee-cyclist-battles-incredible-adversities-to-pursue-dreams/na20201002222944667",
  "https://www.newindianexpress.com/cities/kochi/2019/Jun/11/nothing-will-stop-me-from-climbing-mt-everest-1988589.html",
  "https://www.happiesthealth.com/testimonials/skydiving-solo-with-a-prosthetic-leg",
  "https://www.theweek.in/health/cover/2025/11/28/the-week-health-summit-2025-some-doctors-changed-my-life-syam-kumar-ss.html",
  "https://www.newindianexpress.com/cities/kochi/2025/Jan/17/skys-the-limit-2",
  "https://www.theweek.in/news/health/2025/11/15/the-week-health-summit-2025-from-suicidal-thoughts-to-solo-skydiving-the-comeback-story-india-needs-to-hear.html",
  "https://www.theweek.in/health/cover/2024/07/27/youngest-person-to-skydive-solo-with-a-prosthetic-leg-syamkumar-s-s.html"
];

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
};

async function run() {
  console.log('Fetching OG images...');
  const results = [];
  
  for (let i = 0; i < articles.length; i++) {
    const url = articles[i];
    try {
      console.log(`Fetching ${url}`);
      const html = await fetchUrl(url);
      
      const ogImageMatch = html.match(/<meta[^>]*?property=["']og:image["'][^>]*?content=["'](.*?)["'][^>]*?>/i)
        || html.match(/<meta[^>]*?content=["'](.*?)["'][^>]*?property=["']og:image["'][^>]*?>/i);
        
      if (ogImageMatch && ogImageMatch[1]) {
        results.push(ogImageMatch[1]);
        console.log(` -> Found: ${ogImageMatch[1]}`);
      } else {
        results.push("/images/gallery-wide-2.png");
        console.log(' -> No og:image found');
      }
    } catch (e) {
      results.push("/images/gallery-wide-2.png");
      console.error(`Error fetching ${url}:`, e.message);
    }
  }

  // Read the original file
  let content = fs.readFileSync('./src/data/newsData.js', 'utf8');
  
  // Replace the first 8 image occurrences
  let parseIndex = 0;
  content = content.replace(/image:\s*["']\/images\/gallery-wide-2\.png["']/g, (match) => {
    if (parseIndex < 8) {
      const newImg = results[parseIndex];
      parseIndex++;
      return `image: "${newImg}"`;
    }
    return match;
  });

  fs.writeFileSync('./src/data/newsData.js', content);
  console.log('Done rewriting src/data/newsData.js');
}

run();
