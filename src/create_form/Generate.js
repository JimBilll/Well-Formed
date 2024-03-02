import Form from "form-generator/form";

// Call the form generation code
export default function generate(data) {
    var formElement = new Form(data);
    return formElement.generateForm();
}