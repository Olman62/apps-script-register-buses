# apps-script-register-buses

The project demonstrates how to create a sample Google Apps Script project to register departing/arriving of the buses from/to a depot.

In order to try it as a startup project, make sure you have a Google account.

## Project Files

All the project files are stored in the folder "src" and they should be coppied to your created project.

### Google sheet file: "Depot Bus Registration.ods"

The Google sheet file contains all the project data for input/output. It has the following sheets:  
- **buses**, in this sheet we store the registering data of the buses' deprature and arrival.
- **absence**, the sheet contains a list of unplanned bus absences for the routes.
- **absence_type**, contains all the possible absence type.
- **statuses**, the sheet contains a list of the possible statuses of the absence records made in the sheet **absence**.

### Google Apps Script file "Code.gs"

The file contains code written in the cloud-based scripting language (**Google Script**) to manage read-write operations from and to Google Sheets.

### User Interface file "index.html"

The file works exactly the same way as a usual index.html file in a web application, but the only difference is how it includes cloud JavaScript files and how it uses the Google Script language. For example, take note of this code at the file end:
```
<?!= HtmlService.createHtmlOutputFromFile('javascript').getContent(); ?>
```

Inside the tags ```<?``` and ```?>``` is GS code and it declares javascript code which is stored in the file javascript.html (see next section).

### JavaScript file "javascript.html"

The javascript file contains JavaScript code of the project, and  it is included in the index.html file as it was described above.

### Stylesheet file "stylesheet.html"

The stylesheet file is similar to a usual stylesheet file but with an unusual file extension because of Google Apps Scrip project features.

### Step-by-step Description of the project

To read step-by-step instructions about how to create this project in a real environment, follow the [link](https://www.expknow.com/how-to-create-apps-script-in-google-account/).
