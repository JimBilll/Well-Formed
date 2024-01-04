import Form from "../form.js";
import TextField from "../field_types/textField.js";
import EmailField from "../field_types/emailField.js";
import * as fs from 'fs';

var fields = [new TextField("First Name", true), new TextField("Last Name", false), new EmailField("Email Address", true)];

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