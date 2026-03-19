import fs from 'fs';
import https from 'https';
import http from 'http';

import { newsData } from '../src/data/newsData.js';

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
  
  for (let i = 0; i < 8; i++) {
    const item = newsData[i];
    try {
      console.log(`Fetching ${item.url}`);
      const html = await fetchUrl(item.url);
      
      const ogImageMatch = html.match(/<meta[^>]*?property=["']og:image["'][^>]*?content=["'](.*?)["'][^>]*?>/i)
        || html.match(/<meta[^>]*?content=["'](.*?)["'][^>]*?property=["']og:image["'][^>]*?>/i);
        
      if (ogImageMatch && ogImageMatch[1]) {
        item.image = ogImageMatch[1];
        console.log(` -> Found: ${item.image}`);
      } else {
        console.log(' -> No og:image found');
      }
    } catch (e) {
      console.error(`Error fetching ${item.url}:`, e);
    }
  }

  const fileContent = `export const newsData = ${JSON.stringify(newsData, null, 2)};`;
  fs.writeFileSync('./src/data/newsData.js', fileContent);
  console.log('Done rewriting src/data/newsData.js');
}

run();
