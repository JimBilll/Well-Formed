import RadioField from "form-generator/field_types/radioField"

export default function RadioFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} class="fieldInput">
            <h3>Radio Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"radioInputName" + id} onChange={e => updateData(e)}></input>
            <label>Field Options: </label>
            <textarea id={"radioInputOptions" + id} onChange={e => updateData(e)}></textarea>
            <label>Required: </label>
            <input type="checkbox" id={"radioInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage"></img></button>
        </div>
    );

    function updateData(e) {
        var newData = data;
        var name = document.getElementById("radioInputName" + id).value;
        var options = document.getElementById("radioInputOptions" + id).value.split("\n");
        var required = document.getElementById("radioInputRequired" + id).checked;
        
        data[id] = new RadioField(name, options, required);
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