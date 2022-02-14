function doGet() {

  return HtmlService
      .createTemplateFromFile('index')
      .evaluate();
}

function readRange() {
  return readSheetValues('buses!busesDataRange'); 
}

function readAbsenses() {
  return readSheetValues('absence!absenceRange');
}

function readAbsenseTypes() {
  return readSheetValues('absence_type!absenceTypesRange');
}

function readStatuses() {
  return readSheetValues('statuses!statusesRange');
}

function readSheetValues(rangeName) {
    var spreadsheetId = '1rA0o29xwr-dchXCL5uoMz8hewRlcBjZ7ooIjI0s3djc';

  var readValues = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;

  if (!readValues) {
    Logger.log('No value data found in the range %s.', rangeName);
  }

  return readValues;
}
