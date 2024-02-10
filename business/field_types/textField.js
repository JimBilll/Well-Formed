export default class TextField {
    constructor(fieldName, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.required = isRequired;
    }

    generateField(){
        // TODO complete generateField method
        var newField = "";
        
        newField += '<label class="gf-label" for="' + this.name + '">' + this.name + '</label>';

        if (this.required) {
            newField +='<span class="asterisk">*</span>\n\t<input type="text" id="' + this.name + '" class="gf-text-input" name="' + this.name + '" required>';
        }
        else {
            newField +='\n\t<input type="text" id="' + this.name + '" class="gf-text-input" name="' + this.name + '">';
        }

        return newField;
    }
}