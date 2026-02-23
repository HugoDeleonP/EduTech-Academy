export async function searchCep(numberCep){    
    const URL = `https://viacep.com.br/ws/${numberCep}/json/`
    const response = await fetch(URL);

    const cepData = await response.json();

    return cepData;
}