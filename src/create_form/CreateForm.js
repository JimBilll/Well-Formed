import TextFieldInput from "./field_inputs/TextFieldInput";
import { useState } from 'react';
import generate from "./Generate.js";

export default function CreateForm() {
    const [formFields, setFormFields] = useState([]);
    const [data, setData] = useState([]);
    const [id, setId] = useState(0);

    return (
        <form>
            {formFields}
            <button type="button" onClick={()=>{addField()}}>Add Field</button>
            <button type="button" onClick={()=>{console.log(data)}}>state</button>
            <button type="button" onClick={()=>{generateForm()}}>Create Form</button>
        </form>
    );
    function addField() {
        setFormFields([...formFields, TextFieldInput(id, data, setData)]);
        setId(id + 1);
    }

    function generateForm() {
        console.log(generate(data));
    }
}