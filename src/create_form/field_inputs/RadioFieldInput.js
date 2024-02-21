import RadioField from "form-generator/field_types/radioField"

export default function RadioFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} className="fieldInput" onLoad={e => setFocus(e)}>
            <h3>Radio Field</h3>
            <label>Field Name: </label>
            <input type="text" id={"radioInputName" + id} aria-label="Radio Field Name" onChange={e => updateData(e)} autoComplete="off"></input>
            <label>Field Options: </label>
            <textarea id={"radioInputOptions" + id} aria-label="Radio Field Options, separate with return" onChange={e => updateData(e)}></textarea>
            <label for={"radioInputRequired" + id}>Required: </label>
            <input type="checkbox" id={"radioInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage" aria-hidden></img></button>
        </div>
    );

    function setFocus(e) {
        document.getElementById("radioInputName" + id).focus();
    }

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