import Form from "./form.js";
import TextField from "./field_types/textField.js";

var fields = [new TextField("First Name"), new TextField("Last Name")]

var testForm = new Form(fields);

console.log(testForm.generateForm());