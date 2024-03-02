export default class RadioField{
    constructor(fieldName, fieldOptions, isRequired){
        this.name = fieldName;
        this.options = fieldOptions;
        this.required = isRequired;
    }

    generateField(){
        var newField = "";
        
        // Create fieldset element
        newField += '<fieldset class="gf-radio-field">\n\t<legend class="gf-radio-label">' + this.name;
        if(this.required){
            newField += '<span class="radio-asterisk" aria-hidden="true">*</span>';
        }
        newField += '</legend>';

        // Create radio buttons for selection button
        for (var i = 0; i < this.options.length; i++) {
            if (this.required) {
                newField +='\n\t\t<input type="radio" id="' + this.options[i] + '" class="gf-radio" name="' + this.name + '" required>';
            }
            else {
                newField +='\n\t\t<input type="radio" id="' + this.options[i] + '" class="gf-radio" name="' + this.name + '">';
            }
            newField += '\n\t\t<label for="' + this.options[i] + '" class="radio-option">' + this.options[i] + '</label><br>';
        }
        newField += '\n\t</fieldset>';
        return newField;
    }
}