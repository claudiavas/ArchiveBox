import axios from "axios";
import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import fs from 'fs';

async function fetchAndProcessURL(url) {
  try {
    // Make an HTTP request to the URL
    const response = await axios.get(url);
    const html = response.data;

    // Process the HTML to extract the main content
    const doc = new JSDOM(html, { url });
    let reader = new Readability(doc.window.document);
    let article = reader.parse();

    // Save the content to a txt file
    const content = `Title: ${article.title}\n\nContent: ${article.textContent}`;
    fs.writeFile('article.txt', content, (err) => {
      if (err) {
        console.error('Error writing to file', err);
      } else {
        console.log('Output saved to article.txt');
      }
    });
  } catch (error) {
    console.error('Error fetching the URL:', error);
  }
}

export { fetchAndProcessURL };