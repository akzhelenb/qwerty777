function registerUser(name, email) {
  var sheetId = 'YOUR_SHEET_ID'; // Replace with your Google Sheets ID
  var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
  // Append the data to the sheet
  sheet.appendRow([name, email, new Date()]);
}

function doGet(e) {
  var name = e.parameter.name;
  var email = e.parameter.email;

  if (name && email) {
    registerUser(name, email);
    return ContentService.createTextOutput('Registration successful!');
  } else {
    return ContentService.createTextOutput('Missing parameters.');
  }
}