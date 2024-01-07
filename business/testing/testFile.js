import Form from "../form.js";
import TextField from "../field_types/textField.js";
import EmailField from "../field_types/emailField.js";
import DateField from "../field_types/dateField.js";
import AddressField from "../field_types/addressField.js";
import DropdownField from "../field_types/dropdownField.js";
import * as fs from 'fs';

var fields = [new TextField("First Name", true),
              new TextField("Last Name", false),
              new EmailField("Email Address", true),
              new DateField("Date of Birth", true),
              new AddressField("Residence", 3, false),
              new DropdownField("Preferred colour", ["red", "blue", "green"], true)];

var testForm = new Form(fields);

var testString = testForm.generateForm();

console.log(testString);

var testSite = "business/testing/testsite.html"

fs.writeFile(testSite, "<html><body>" + testString + "</body></html>", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});