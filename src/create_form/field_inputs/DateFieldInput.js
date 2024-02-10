import DateField from "form-generator/field_types/dateField";

export default function DateFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} class="fieldInput">
            <h3>Date Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"dateInputName" + id} onChange={e => updateData(e)}></input>
            <label>Required: </label>
            <input type="checkbox" id={"dateInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" onClick={() => deleteField()}>Delete</button>
        </div>
    );

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