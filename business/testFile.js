import textField from "./field_types/textField.js";

var testField = new textField("test", true);

console.log(testField.name + testField.required);