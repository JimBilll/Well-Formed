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
        newField += '<label class="gf-label">' + this.name + '</label>';

        if(this.required){
            newField += '<span class="asterisk">*</span>';
        }

        for (var i = 0; i < this.options.length; i++) {
            if (this.required) {
                newField +='\n\t<input type="radio" id="' + this.options[i] + '" name="' + this.name + '" required>';
            }
            else {
                newField +='\n\t<input type="radio" id="' + this.options[i] + '" name="' + this.name + '">';
            }
            newField += '\n\t<label for="' + this.options[i] + '" class="radio-option">' + this.options[i] + '</label>';
        }
        return newField;
    }
}