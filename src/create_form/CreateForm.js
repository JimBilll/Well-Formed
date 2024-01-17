import TextFieldInput from "./field_inputs/TextFieldInput";
import { useState } from 'react';

export default function CreateForm() {
    const [formFields, setFormFields] = useState([]);
    return (
        <form>
            {formFields}
            <button type="button" onClick={()=>{addField()}}>Add Field</button>
        </form>
    );

    function addField(){
        setFormFields([...formFields, TextFieldInput()]);
        console.log(formFields);
    }
}