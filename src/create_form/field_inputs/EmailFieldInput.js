import EmailField from "form-generator/field_types/emailField";

export default function EmailFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id} className="fieldInput" onLoad={e => setFocus(e)}>
            <h3>Email Field</h3>
            <label>Field Name: </label>
            <input type="text" id={"emailInputName" + id} aria-label="Email Field Name" onChange={e => updateData(e)} autoComplete="off"></input>
            <label for={"emailInputRequired" + id}>Required: </label>
            <input type="checkbox" id={"emailInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" className="deleteButton" title="Delete Field" onClick={() => deleteField()}><img src="form_icons/deleteIcon.png" alt="DeleteField" className="deleteButtonImage" aria-hidden></img></button>
        </div>
    );

    function setFocus(e) {
        document.getElementById("emailInputName" + id).focus();
    }

    function updateData(e) {
        //var newData = data;
        var name = document.getElementById("emailInputName" + id).value;
        var required = document.getElementById("emailInputRequired" + id).checked;
        
        data[id] = new EmailField(name, required);
        //setData(newData);
    }

    function deleteField() {
        var newData = data;
        data[id] = null;
        setData(newData);

        var element = document.getElementById("fieldInput" + id);
        element.remove();
    }
}