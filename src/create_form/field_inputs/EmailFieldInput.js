import EmailField from "form-generator/field_types/emailField";

export default function EmailFieldInput(id, data, setData) {

    return (
        <div id={"fieldInput" + id}>
            <h3>Email Input</h3>
            <label>Field Name: </label>
            <input type="text" id={"emailInputName" + id} onChange={e => updateData(e)}></input>
            <label>Required: </label>
            <input type="checkbox" id={"emailInputRequired" + id} onChange={e => updateData(e)}></input>
            <button type="button" onClick={() => deleteField()}>Delete</button>
        </div>
    );

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