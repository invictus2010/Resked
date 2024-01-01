const pocPhone = '7687687687'
const pocEmail = 'wtdoor.mil@us.navy.mil'
const pocName = 'Door, William T'

function checkForIframe() {
    const iframeElement = document.querySelector('iframe'); 
  
    if (iframeElement) {
      const iframeContentDocument = iframeElement.contentDocument;
  
      const inputElementInIframe = iframeContentDocument.querySelectorAll('input[type=text]');
      if (inputElementInIframe) {
        inputElementInIframe[4].value = pocPhone;
        inputElementInIframe[3].value = pocEmail;
        inputElementInIframe[2].value = pocName;
      }
      else {
        // If input element is not found, retry after a delay
        console.log('Input element not found, retrying...');
        setTimeout(checkForIframe, 2000); // Wait for 2 seconds and then retry
      }
    } else {
      // If iframe is not found, retry after a delay
      console.log('Iframe not found, retrying...');
      setTimeout(checkForIframe, 2000); // Wait for 2 seconds and then retry
    }
  }
  // Call the function to start checking for the iframe
  setTimeout(checkForIframe, 5000);
