import AddressField from "form-generator/field_types/addressField";

export default function AddressFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} className="fieldInput" onLoad={e => setFocus(e)}>
            <h3>Address Field</h3>
            <div className="field-edit-controls">
                <div className="field-edit-inputs">
                    <div className="text-input">
                        <label>Field Name: </label>
                        <input type="text" id={"addressInputName" + id} aria-label="Address Field Name" onChange={e => updateData(e)} autoComplete="off"></input>
                    </div>
                    <div className="slider-input">
                        <label for={"addressInputLines" + id}>Address Lines: </label>
                        <input type="range" min="3" max="7" defaultValue="3" id={"addressInputLines" + id} onChange={e => updateData(e)}></input>
                        <label id={"addressInputLinesNumber" + id}>3</label>
                    </div>
                    <div className="required-input">
                        <label for={"addressInputRequired" + id}>Required: </label>
                        <input type="checkbox" id={"addressInputRequired" + id} onChange={e => updateData(e)}></input>
                    </div>
                </div>
                <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage" aria-hidden></img></button>
            </div>
        </div>
    );

    // Set the focus to the name input when created
    function setFocus(e) {
        document.getElementById("addressInputName" + id).focus();
    }

    // Update the stored form data
    function updateData(e) {
        var newData = data;
        var name = document.getElementById("addressInputName" + id).value;
        var lines = document.getElementById("addressInputLines" + id).value;
        document.getElementById("addressInputLinesNumber" + id).innerText = lines; // update the slider counter on the UI
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