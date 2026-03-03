import { validation, validationRules } from "../service/validationFields.js";

export function eventInput() {



    validationRules.forEach(rule => {
        const input = document.querySelector(rule.field)

        if(input){
            input.addEventListener("input", () => {
                validation()
            });

            input.addEventListener("blur", () => {
                validation()
            });

        }

    })
}