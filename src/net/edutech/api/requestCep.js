

export async function searchCep(numberCep){    
    const URL = `https://www.viacep.com.br/ws/${numberCep}/json/`
    const response = await fetch(URL);

    return await response.json;
}