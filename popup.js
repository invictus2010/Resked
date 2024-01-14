/**
 * Asynchronously loads the user's information from storage.
 * @returns {Promise<Object>} A promise that resolves with the user's information.
 */
async function load_user() {
    return await chrome.storage.sync.get(['user']);
}

/**
 * Displays the user's information on the webpage.
 * Retrieves the user's information from storage and updates the corresponding HTML elements.
 */
function display_user() {
    load_user()
    .then((result) => {
        const user = JSON.parse(result.user);
        console.log('Value currently is ' + user.username);
        document.getElementById('current_username').innerHTML = user.username;
        document.getElementById('current_phone').innerHTML = user.phone;
        document.getElementById('current_email').innerHTML = user.email;
    })
}

/**
 * Event listener for the DOMContentLoaded event.
 * Initializes the save button and input fields.
 * Displays the user's information.
 * Saves the user's input to storage when the save button is clicked.
 * Updates the displayed user information after saving.
 */
document.addEventListener('DOMContentLoaded', function() {
    const saveBtn = document.getElementById('saveBtn');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
  
    display_user();

    saveBtn.addEventListener('click', function() {
        // If the user didn't provide any input (i.e. the input value is empty), then use the current value
        const current_username = document.getElementById('current_username').innerHTML;
        const username = usernameInput.value !== "" ? usernameInput.value : current_username;
        
        const current_phone = document.getElementById('current_phone').innerHTML;
        const phone = phoneInput.value !== "" ? phoneInput.value : current_phone;
        
        const current_email = document.getElementById('current_email').innerHTML;
        const email = emailInput.value !== "" ? emailInput.value : current_email;

        // Serialize the user input and save it to storage
        const user = { username, phone, email };
        chrome.storage.sync.set({ 'user': JSON.stringify(user) })
        .then(() => {
            // Update status to let user know options were saved.
            document.getElementById('status').classList.remove('hidden');
            setTimeout(function() {
                document.getElementById('status').classList.add('hidden');
            }, 2500);
        });
        
        // Update the displayed info
        display_user();
    });
});
