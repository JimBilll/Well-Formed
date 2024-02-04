import TextFieldInput from "./field_inputs/TextFieldInput.js";
import EmailFieldInput from "./field_inputs/EmailFieldInput.js";
import DateFieldInput from "./field_inputs/DateFieldInput.js";
import AddressFieldInput from "./field_inputs/AddressFieldInput.js";
import DropdownFieldInput from "./field_inputs/DropdownFieldInput.js";
import RadioFieldInput from "./field_inputs/RadioFieldInput.js";
import { useState } from 'react';
import generate from "./Generate.js";

export default function CreateForm() {
    const [formFields, setFormFields] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);

    return (
        <form>
            {formFields}
            <button type="button" onClick={()=>{addField(TextFieldInput)}}>Add Text Field</button>
            <button type="button" onClick={()=>{addField(EmailFieldInput)}}>Add Email Field</button>
            <button type="button" onClick={()=>{addField(DateFieldInput)}}>Add Date Field</button>
            <button type="button" onClick={()=>{addField(AddressFieldInput)}}>Add Address Field</button>
            <button type="button" onClick={()=>{addField(DropdownFieldInput)}}>Add Dropdown Field</button>
            <button type="button" onClick={()=>{addField(RadioFieldInput)}}>Add Dropdown Field</button>
            <button type="button" onClick={()=>{console.log(data); console.log(formFields)}}>state</button>
            <button type="button" onClick={()=>{generateForm()}}>Create Form</button>
        </form>
    );

    function addField(FieldInputType) {
        setFormFields([...formFields, FieldInputType(id, data, setData)]);
        setId(id + 1);
    }

    function generateForm() {
        var newForm = generate(data);
        var resultField = document.getElementById("resultField");
        var previewField = document.getElementById("previewField");

        resultField.innerText = newForm;
        previewField.innerHTML = newForm.replace('<input type="submit">', '');

        console.log(newForm);
    }
}