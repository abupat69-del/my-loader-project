import { loadAsset } from './asset-loader.js';

const dependencies = [
  'https://cloudflare.com'
];

Promise.all(dependencies.map(loadAsset))
  .then((urls) => {
    console.log('All scripts and styles loaded successfully!', urls);
  })
  .catch((error) => {
    console.error('Loader initialization failed:', error);
  });
