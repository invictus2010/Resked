/**
 * Checks for the presence of an iframe and inserts values once found.
 */
function checkForIframe() {
  const iframeElement = document.querySelector('iframe'); 

  if (iframeElement === null) {
    setTimeout(checkForIframe, 2000); // Wait for 2 seconds and then retry
    return;
  }

  const inputs = get_input_elements(iframeElement.contentDocument);
  const allInputsFound = inputs.every((input) => input !== null);
  if (!allInputsFound) {
    console.log('Input element not found, retrying...');
    setTimeout(checkForIframe, 2000); // Wait for 2 seconds and then retry
    return;
  }
  const [inputUsername, inputPhone, inputEmail, inputPhoneType] = inputs;

  chrome.storage.sync.get(['user'])
  .then((result) => {
    const user = JSON.parse(result.user);
    if (user) {
      inputUsername.value = user.username;
      inputPhone.value = user.phone;
      inputEmail.value = user.email;
      inputPhoneType.value = "D";
    }
  });
}

// Call the function to start checking for the iframe
setTimeout(checkForIframe, 5000);

/**
 * Retrieves input elements from the provided iframe content document.
 * @param {Document} iframeContentDocument - The document object of the iframe content.
 * @returns {Array} - An array containing the input elements.
 */
function get_input_elements(iframeContentDocument) {
    const inputUsername = iframeContentDocument.getElementById('F_EDM_IDT_RQST_NAME');
    const inputPhone = iframeContentDocument.getElementById('F_EDM_IDT_RQST_PHONE');
    const inputEmail = iframeContentDocument.getElementById('F_EDM_IDT_RQST_N_EMAIL_MBR');
    const inputPhoneType = iframeContentDocument.getElementById('F_EDM_IDT_RQST_N_PHONE_TYPE');
    return [inputUsername, inputPhone, inputEmail, inputPhoneType];
}