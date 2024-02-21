import DropdownField from "form-generator/field_types/dropdownField";

export default function DropdownFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} className="fieldInput" onLoad={e => setFocus(e)}>
            <h3>Dropdown Field</h3>
            <label>Field Name: </label>
            <input type="text" id={"dropdownInputName" + id} aria-label="Dropdown Field Name" onChange={e => updateData(e)}autoComplete="off"></input>
            <label>Field Options: </label>
            <textarea id={"dropdownInputOptions" + id} aria-label="Dropdown Field Options, separate with return" onChange={e => updateData(e)}></textarea>
            <label for={"dropdownInputRequired" + id}>Required: </label>
            <input type="checkbox" id={"dropdownInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage" aria-hidden></img></button>
        </div>
    );

    function setFocus(e) {
        document.getElementById("dropdownInputName" + id).focus();
    }

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