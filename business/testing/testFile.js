import * as fs from 'fs';
import Form from "../form.js";
import TextField from "../field_types/textField.js";
import EmailField from "../field_types/emailField.js";
import DateField from "../field_types/dateField.js";
import AddressField from "../field_types/addressField.js";
import DropdownField from "../field_types/dropdownField.js";
import RadioField from "../field_types/radioField.js";

var fields = [new TextField("First Name", true),
              new TextField("Last Name", true),
              new EmailField("Email Address", false),
              new DateField("Date of Birth", true),
              new AddressField("Residence", 4, true),
              new DropdownField("Preferred colour", ["red", "blue", "green"], false),
              new RadioField("Pick One", ["Option 1", "Option 2", "Option 3"], true)];

var testForm = new Form(fields);

var testString = testForm.generateForm();

console.log(testString);

// Write generated form element string to testsite.html
var testSite = "business/testing/testsite.html"

fs.writeFile(testSite, '<html><head><link rel="stylesheet" href="teststyles.css"></head><body>' + testString + '</body></html>', function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});