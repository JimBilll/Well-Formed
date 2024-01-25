import AddressField from "form-generator/field_types/addressField";

export default function AddressFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id}>
            <h3>Address Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"addressInputName" + id} onChange={e => updateData(e)}></input>
            <label>Number of Address Lines: </label>
            <input type="text" id={"addressInputLines" + id} onChange={e => updateData(e)}></input>
            <label>Required: </label>
            <input type="checkbox" id={"addressInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" onClick={() => deleteField()}>Delete</button>
        </div>
    );

    function updateData(e) {
        var newData = data;
        var name = document.getElementById("addressInputName" + id).value;
        var lines = document.getElementById("addressInputLines" + id).value;
        var required = document.getElementById("addressInputRequired" + id).checked;
        
        data[id] = new AddressField(name, lines, required);
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