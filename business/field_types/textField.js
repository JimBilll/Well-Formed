export default class TextField {
    constructor(fieldName, isRequired){
        // TODO - complete constructor method
        this.name = fieldName;
        this.required = isRequired;
    }

    generateField(){
        // TODO complete generateField method
        return this.name + "PLACEHOLDER"
    }
}