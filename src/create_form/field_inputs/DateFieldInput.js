import DateField from "form-generator/field_types/dateField";

export default function DateFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} className="fieldInput" onLoad={e => setFocus(e)}>
            <h3>Date Field</h3>
            <label>Field Name: </label>
            <input type="text" id={"dateInputName" + id} aria-label="Date Field Name" onChange={e => updateData(e)} autoComplete="off"></input>
            <label for={"dateInputRequired" + id}>Required: </label>
            <input type="checkbox" id={"dateInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage" aria-hidden></img></button>
        </div>
    );

    function setFocus(e) {
        document.getElementById("dateInputName" + id).focus();
    }

    function updateData(e) {
        var newData = data;
        var name = document.getElementById("dateInputName" + id).value;
        var required = document.getElementById("dateInputRequired" + id).checked;
        
        data[id] = new DateField(name, required);
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