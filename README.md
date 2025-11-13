# User Registration System with Google Sheets Integration

This documentation provides comprehensive setup instructions for the User Registration System with Google Sheets integration.

## Table of Contents
1. [Creating Google Sheets](#creating-google-sheets)
2. [Google Apps Script Setup](#google-apps-script-setup)
3. [Deployment Steps](#deployment-steps)
4. [Configuration](#configuration)
5. [Usage Instructions](#usage-instructions)
6. [Validation Rules](#validation-rules)
7. [Security Warnings](#security-warnings)
8. [Troubleshooting](#troubleshooting)

## Creating Google Sheets
1. **Open Google Sheets:** Go to [Google Sheets](https://sheets.google.com) and sign in with your Google account.
2. **Create a New Sheet:** Click on the `+ Blank` option to create a new spreadsheet.
3. **Name Your Sheet:** Give your sheet an appropriate name such as `User Registration Data`.

## Google Apps Script Setup
1. **Open Google Apps Script:** In your Google Sheet, click on `Extensions` > `Apps Script`.
2. **Replace Default Code:** Delete any code in the script editor and replace it with your registration system logic.
3. **Save the Script:** Give your script a name and click on the disk icon to save.

## Deployment Steps
1. **Deploy as Web App:** Click on `Deploy` > `New deployment`, select `Web app`.
2. **Enter Version Description:** Provide a description for the deployment.
3. **Execute as and Access:** Under `Execute as`, select `Me`, select `Anyone` for `Who has access`. Then click deploy.
4. **Authorize Security Permissions:** Authorize the necessary permissions for the app to run.

## Configuration
- **Set Up the Form:** Set up an HTML form that submits user data to the Apps Script endpoint.
- **Google Sheet ID:** Make sure to include the correct Google Sheet ID in the script to enable data writing.

## Usage Instructions
- **Access the Registration Form:** Share the URL of the HTML form with users.
- **Submitting Data:** Users will fill out the form and submit their registration information, which will be saved to the Google Sheet.

## Validation Rules
- **Email Validation:** Ensure the email field has a valid email format.
- **Required Fields:** All fields marked with * should be filled out.

## Security Warnings
- **Personal Data Protection:** Ensure that sensitive data is handled securely and not exposed inappropriately.
- **Authorization:** Always check that the proper permissions are granted when executing scripts.

## Troubleshooting
- **Common Issues:**
  - If data is not being written to the Google Sheet, check the Apps Script logs for errors. 
  - Ensure the Google Sheet ID is correct and accessible.
- **Debugging:** Use `Logger.log()` statements in your script to debug issues and check variable values.

## Conclusion
This guide provides an overview of setting up a User Registration System with Google Sheets integration. Make sure to follow each step carefully and refer to the corresponding sections for detailed instructions.