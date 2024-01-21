import Form from "form-generator/form";
import textField from "form-generator/field_types/textField";

export default function generate(data) {
    var formData = []

    data.forEach(element => {
        formData.push(new textField(element, false));
    });

    var formElement = new Form(formData);

    return formElement.generateForm();
}