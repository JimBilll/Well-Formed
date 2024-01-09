export default class RadioField{
    constructor(fieldName, fieldOptions, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.options = fieldOptions;
        this.required = isRequired;
    }

    generateField(){
        // TODO complete generateField method
        var newField = "";
        newField += '<label>' + this.name + '</label>';

        for (var i = 0; i < this.options.length; i++) {
            if (this.required) {
                newField +='\n\t<input type="radio" id="' + this.options[i] + '" name="' + this.name + '" required>';
            }
            else {
                newField +='\n\t<input type="radio" id="' + this.options[i] + '" name="' + this.name + '">';
            }
            newField += '\n\t<label for="' + this.options[i] + '">' + this.options[i] + '</label>';
        }
        return newField;
    }
}