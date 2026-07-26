// asset-loader.js

export function loadAsset(url) {
  // Extract file extension to determine tag type
  const extension = url.split('.').pop().toLowerCase();
  const isCSS = extension === 'css';
  
  const tag = isCSS ? 'link' : 'script';
  const attr = isCSS ? 'href' : 'src';
  const parent = isCSS ? 'head' : 'body';

  return new Promise((resolve, reject) => {
    // Create the HTML element dynamically
    const element = document.createElement(tag);

    // Set up success and failure callbacks
    element.onload = () => resolve(url);
    element.onerror = () => reject(new Error(`Failed to load: ${url}`));

    // Configure specific element properties
    if (isCSS) {
      element.type = 'text/css';
      element.rel = 'stylesheet';
    } else {
      element.async = true; // Prevents blocking the rest of the page
    }

    // Set the source/href URL and append to the DOM
    element[attr] = url;
    document[parent].appendChild(element);
  });
}
