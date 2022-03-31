function myFunction() {
  // test get data
  const rows = Sheets.Spreadsheets.Values.get(SHEET_ID, SHEET_RANGE).values;

  for(let i=0; i<rows.length; i++) {
    for(let j=0; j<rows[i].length; j++) {
      console.log(rows[i][j])
    }
  }
}
