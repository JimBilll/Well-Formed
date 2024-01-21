export default function TextFieldInput(id, data, setData) {
    
    return (
        <div>
            <h3>Text Input</h3>
            <label>Field Name: </label>
            <input type="text" onChange={e => updateData(e)}></input>
        </div>
    );
    function updateData(e) {
        var newData = data;
        data[id] = e.target.value;
        setData(newData);
    }
}