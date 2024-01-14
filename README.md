# ReskedMe
A Chrome extension to help you resked your IDT's faster. 

This extension will autofill the "Point of Contact" information for you. Future plans include helping you write "Tasks and Accomplishments" and "Justification Comments."

No information is collected or shared.

## Setting up Extension
1. Download the files.
2. Install the Chrome Extension (see below).

## Installing a Google Chrome Extension in Developer Mode

To install a Google Chrome extension in developer mode, follow these steps:

1. Download the extension's source code and extract it to a folder on your computer.

2. Open Google Chrome and go to the Extensions page by typing `chrome://extensions` in the address bar and pressing Enter.

3. Enable Developer Mode by toggling the switch in the top right corner of the Extensions page.

4. Click on the "Load unpacked" button and select the folder where you extracted the extension's source code.

5. The extension will be installed and ready to use. You can find it in the list of installed extensions on the Extensions page.

## Configuring your Inputs

1. Open the extension's input panel by clicking the extension icon in the toolbar.

2. Input your values and click "Save".

3. You should see the updated values displayed on the extension's input panel.

## Future Enhancements
NSIPS is tough and uses old tech, so ChatGPT isn't always immediately right. Specifically, the site loads all of the buttons and inputs within an iFrame. 

Here are some places to start if you want to contribute:
1. Automatically select the phone type. Hint: manipulate like so `document.querySelectorAll('select[name=F_EDM_IDT_RQST_F_IDT_TYPE_SUPPORT]')[0].selectedIndex = 3` but within the iFrame.
2. Better error handling. Right now, I have the extension wait 5 seconds before checking for the iFrame and its inputs. That 5 second wait is because the inputs aren't viewable when the page first loads in. Ideally, the extension would just lurk in the background checking for when they appear. If they aren't there, the code would just check back later.

