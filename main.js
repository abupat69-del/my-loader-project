// main.js
import { loadAsset } from './asset-loader.js';

// Define the dependencies you need to fetch
const dependencies = [
  'https://cloudflare.com',
  'https://example.com'
];

// Execute parallel loading
Promise.all(dependencies.map(loadAsset))
  .then((urls) => {
    console.log('All scripts and styles loaded successfully!', urls);
    // Initialize your application here
    initializeApp();
  })
  .catch((error) => {
    console.error('Loader initialization failed:', error);
  });

function initializeApp() {
  // Your app logic goes here
}
