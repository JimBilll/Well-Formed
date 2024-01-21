import TextField from "form-generator/field_types/textField";

export default function TextFieldInput(id, data, setData) {
    
    return (
        <div>
            <h3>Text Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"textInputName" + id} onChange={e => updateData(e)}></input>
            <label>Required: </label>
            <input type="checkbox" id={"textInputRequired" + id} onChange={e => updateData(e)}></input>
        </div>
    );
    function updateData(e) {
        var newData = data;
        var name = document.getElementById("textInputName" + id).value;
        var required = document.getElementById("textInputRequired" + id).checked;
        
        data[id] = new TextField(name, required);
        setData(newData);
    }
}