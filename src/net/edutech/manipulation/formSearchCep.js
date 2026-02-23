import { searchCep } from "../api/requestCep.js";

const enrollmentCep = document.querySelector(".cep");
const street = document.querySelector(".street");
const neighborhood = document.querySelector(".neighborhood");
const city = document.querySelector(".city");
const federativeUnit = document.querySelector(".federativeUnit");


export async function inputCep(){

    enrollmentCep.addEventListener("focusout", event =>{
        
        let cepInput = event.target.value;
        const cepData = searchCep(cepInput);        
        console.log(cepData);
        

    });
}