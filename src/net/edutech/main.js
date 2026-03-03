import { eventInput } from "./events/inputFields.js";
import { eventSubmit } from "./events/submitForms.js";
import { inputCep } from "./manipulation/formSearchCep.js";
import { validation } from "./service/validationFields.js";

function main() {

    inputCep();
    validation();
    eventInput();
    eventSubmit();

}

main();