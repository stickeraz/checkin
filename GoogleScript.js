function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const params = e.parameter;
  const timestamp = new Date();

  const data = [params.name, params.status, timestamp];

  // Append data to sheet
  sheet.appendRow(data);

  // Return a success response
  return ContentService.createTextOutput("Success");
}
function addCalendarEvents() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CALENDAR");
  if (!sheet) {
    Logger.log("Sheet 'CALENDAR' not found.");
    return;
  }

  var range = sheet.getDataRange();
  var values = range.getValues();
  
  // Assume headers are present; start processing from the second row
  for (var i = 1; i < values.length; i++) {
    var rowData = values[i];
    var name = rowData[0];
    var status = rowData[1];
    var timestamp = rowData[2];
    var processed = rowData[3]; // Assume the "Processed" column is the 4th column (index 3)
    
    if (processed !== true && processed !== "TRUE") {
      var eventDate = new Date(timestamp);
      if (!isNaN(eventDate.getTime())) {
        var calendarId = '6b1febe4a0e4995d715c32654a48a8545afff838133e5614716cc6459b245db5@group.calendar.google.com';
        var calendar = CalendarApp.getCalendarById(calendarId);
        var eventTitle = status + "-" + name;
        
        // Format the time as hh:mm:ss
        var hours = eventDate.getHours().toString().padStart(2, '0');
        var minutes = eventDate.getMinutes().toString().padStart(2, '0');
        var seconds = eventDate.getSeconds().toString().padStart(2, '0');
        var formattedTime = hours + ":" + minutes + ":" + seconds;

        var eventDescription = status + "-" + name + "-" + formattedTime;

        // Check if an event with the same title and date already exists to avoid duplicates
        var events = calendar.getEventsForDay(eventDate, {search: eventTitle});
        var eventExists = events.some(function(event) {
          return event.getTitle() === eventTitle && event.getStartTime().getTime() === eventDate.getTime();
        });

        if (!eventExists) {
          calendar.createEvent(eventTitle, eventDate, eventDate, {description: eventDescription});
          
          // Mark the row as processed
          sheet.getRange(i + 1, 4).setValue(true); // Mark the "Processed" column as TRUE
        }
      }
    }
  }
}
