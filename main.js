import { loadAsset } from './asset-loader.js';

const dependencies = [
  'https://cloudflare.com
'
];

// Create a text area on your page to show what is happening
const statusDiv = document.createElement('div');
statusDiv.style.padding = '20px';
statusDiv.style.fontSize = '20px';
statusDiv.innerText = '⏳ Loading assets...';
document.body.appendChild(statusDiv);

Promise.all(dependencies.map(loadAsset))
  .then(() => {
    // This runs if it works!
    statusDiv.style.color = 'green';
    statusDiv.innerText = '✅ SUCCESS: All scripts loaded successfully!';
  })
  .catch((error) => {
    // This runs if it breaks!
    statusDiv.style.color = 'red';
    statusDiv.innerText = `❌ ERROR: ${error.message}`;
  });

