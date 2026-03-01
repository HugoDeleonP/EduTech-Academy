import { searchCep } from "../api/requestCep.js";

const enrollmentCep = document.querySelector(".cep");
const street = document.querySelector(".street");
const neighborhood = document.querySelector(".neighborhood");
const city = document.querySelector(".city");
const federativeUnit = document.querySelector(".federativeUnit");


export async function inputCep() {

    enrollmentCep.addEventListener("focusout", async event => {

        let cepInput = event.target.value;
        const cepData = await searchCep(cepInput);
        console.log(cepData);

        street.value = cepData.logradouro;
        neighborhood.value = cepData.bairro;
        city.value = cepData.localidade;
        federativeUnit.value = cepData.estado;

    });
}