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
            <h3 id="addFieldsTitle">Add Field</h3>
            <div id="addFieldButtons">
                <button type="button" className="fieldButton" title="Add Text Field" onClick={()=>{addField(TextFieldInput)}}><img src="form_icons/textIcon.png" alt="Add Text Field" className="fieldButtonImage" aria-hidden></img></button>
                <button type="button" className="fieldButton" title="Add Email Field" onClick={()=>{addField(EmailFieldInput)}}><img src="form_icons/emailIcon.png" alt="Add Email Field" className="fieldButtonImage" aria-hidden></img></button>
                <button type="button" className="fieldButton" title="Add Date Field" onClick={()=>{addField(DateFieldInput)}}><img src="form_icons/dateIcon.png" alt="Add Date Field" className="fieldButtonImage" aria-hidden></img></button>
                <button type="button" className="fieldButton" title="Add Address Field" onClick={()=>{addField(AddressFieldInput)}}><img src="form_icons/addressIcon.png" alt="Add Address Field" className="fieldButtonImage" aria-hidden></img></button>
                <button type="button" className="fieldButton" title="Add Dropdown Field" onClick={()=>{addField(DropdownFieldInput)}}><img src="form_icons/dropdownIcon.png" alt="Add Dropdown Field" className="fieldButtonImage" aria-hidden></img></button>
                <button type="button" className="fieldButton" title="Add Radio Field" onClick={()=>{addField(RadioFieldInput)}}><img src="form_icons/radioIcon.png" alt="Add Radio Field" className="fieldButtonImage" aria-hidden></img></button>
            </div>
            <button type="button" id="createFormButton" onClick={()=>{generateForm()}}>Create Form</button>
        </form>
    );

    // Create a new field element and add it to the list of fields
    function addField(FieldInputType) {
        setFormFields([...formFields, FieldInputType(id, data, setData)]);
        setId(id + 1);
    }

    // Generate the form element and send it to the result and preview fields
    function generateForm() {
        var newForm = generate(data);
        var resultField = document.getElementById("resultField");
        var previewField = document.getElementById("previewField");

        resultField.innerText = newForm;
        previewField.innerHTML = newForm.replace('<input type="submit">', '');

        console.log(newForm);
    }
}