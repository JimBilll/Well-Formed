import TextFieldInput from "./field_inputs/TextFieldInput.js";
import EmailFieldInput from "./field_inputs/EmailFieldInput.js";
import DateFieldInput from "./field_inputs/DateFieldInput.js";
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
            <button type="button" onClick={()=>{console.log(data); console.log(formFields)}}>state</button>
            <button type="button" onClick={()=>{generateForm()}}>Create Form</button>
        </form>
    );

    function addField(FieldInputType) {
        setFormFields([...formFields, FieldInputType(id, data, setData)]);
        setId(id + 1);
    }

    function generateForm() {
        console.log(generate(data));
    }
}