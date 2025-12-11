function doPost(e){
  var ss = SpreadsheetApp.openById('YOUR_SHEET_ID');
  var sh = ss.getSheetByName('Bookings') || ss.insertSheet('Bookings');
  var data = JSON.parse(e.postData.contents);
  var row = [new Date(), data.name, data.phone, data.service, data.details];
  sh.appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}