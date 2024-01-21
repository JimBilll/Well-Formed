import Form from "form-generator/form";
import textField from "form-generator/field_types/textField";

export default function generate(data) {
    var formElement = new Form(data);

    return formElement.generateForm();
}