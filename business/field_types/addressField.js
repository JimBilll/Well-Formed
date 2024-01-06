export default class AddressField {
    constructor(fieldName, noOfLines, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.lines = noOfLines;
        this.required = isRequired;
    }

    generateField() {
        // TODO complete generateField method
        var newField = "";
        newField += '<label>' + this.name + '</label>';

        for (var i = 1; i <= this.lines; i++) {
            newField += '\n\t<label for="Address Line ' + i + '">Address Line ' + i + '</label>';
            
            if (this.required) {
                newField +='\n\t<input type="text" id="Address Line ' + i + '" name="Address Line ' + i + '" aria-label="' + this.name + ' Address Line "' + i + ' required>';
            }
            else {
                newField +='\n\t<input type="text" id="Address Line ' + i + '" name="Address Line ' + i + '" aria-label="' + this.name + ' Address Line "' + i + ' >';
            }
        }

        return newField;
    }
}