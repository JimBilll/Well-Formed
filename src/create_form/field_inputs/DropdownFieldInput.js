import DropdownField from "form-generator/field_types/dropdownField";

export default function DropdownFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} class="fieldInput">
            <h3>Dropdown Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"dropdownInputName" + id} onChange={e => updateData(e)}></input>
            <label>Field Options: </label>
            <textarea id={"dropdownInputOptions" + id} onChange={e => updateData(e)}></textarea>
            <label>Required: </label>
            <input type="checkbox" id={"dropdownInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage"></img></button>
        </div>
    );

    function updateData(e) {
        var newData = data;
        var name = document.getElementById("dropdownInputName" + id).value;
        var options = document.getElementById("dropdownInputOptions" + id).value.split("\n");
        var required = document.getElementById("dropdownInputRequired" + id).checked;
        
        data[id] = new DropdownField(name, options, required);
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