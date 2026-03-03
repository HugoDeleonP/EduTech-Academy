import { validation } from "../service/validationFields.js";

const submit = document.querySelector(".submit");

export function eventSubmit(){

    submit.addEventListener( "submit", event =>{
        if(!validation()){
            event.defaultPrevented()
        }
    })
}