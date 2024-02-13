import TextField from "form-generator/field_types/textField";

export default function TextFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} class="fieldInput">
            <h3>Text Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"textInputName" + id} onChange={e => updateData(e)}></input>
            <label>Required: </label>
            <input type="checkbox" id={"textInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage"></img></button>
        </div>
    );

    function updateData(e) {
        var newData = data;
        var name = document.getElementById("textInputName" + id).value;
        var required = document.getElementById("textInputRequired" + id).checked;
        
        data[id] = new TextField(name, required);
        setData(newData);
    }

    function deleteField() {
        var newData = data;
        data[id] = null;
        setData(newData);

        var element = document.getElementById("fieldInput" + id);
        element.remove();
    }
}