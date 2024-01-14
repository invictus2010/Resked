/**
 * Checks for the presence of an iframe and inserts values once found.
 */
function checkForIframe() {
  const iframeElement = document.querySelector('iframe'); 

  if (iframeElement) {
    const iframeContentDocument = iframeElement.contentDocument;

    const inputs = get_input_elements(iframeContentDocument);
    if (inputs.every((input) => input !== null)) {
      const [inputUsername, inputPhone, inputEmail, inputPhoneType] = inputs;
      chrome.storage.sync.get(['user'], function(result) {
        const user = JSON.parse(result.user);
        if (user) {
          inputUsername.value = user.username;
          inputPhone.value = user.phone;
          inputEmail.value = user.email;
          inputPhoneType.value = "D";
        }
      });
    } else {
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

function get_input_elements(iframeContentDocument) {
    const inputUsername = iframeContentDocument.getElementById('F_EDM_IDT_RQST_NAME');
    const inputPhone = iframeContentDocument.getElementById('F_EDM_IDT_RQST_PHONE');
    const inputEmail = iframeContentDocument.getElementById('F_EDM_IDT_RQST_N_EMAIL_MBR');
    const inputPhoneType = iframeContentDocument.getElementById('F_EDM_IDT_RQST_N_PHONE_TYPE');
    return [inputUsername, inputPhone, inputEmail, inputPhoneType];
}