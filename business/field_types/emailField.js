export default class EmailField {
    constructor(fieldName, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.required = isRequired;
    }

    generateField(){
        // TODO complete generateField method
        var newField = "";
        
        newField += '<label for="' + this.name + '">' + this.name + '</label>';

        if (this.required) {
            newField +='\n\t<input type="email" id="' + this.name + '" name="' + this.name +'" required>';
        }
        else {
            newField +='\n\t<input type="email" id="' + this.name + '" name="' + this.name + '">';
        }

        return newField;
    }
}