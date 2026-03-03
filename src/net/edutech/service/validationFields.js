
const validationRules = [
    { field: ".name", label: ".name_label", message: "O nome é obrigatório" },
    { field: ".email", label: ".email_label", message: "O email é obrigatório" },
    { field: ".numberPhone", label: ".numberPhone_label", message: "O numero é obrigatório" },
    { field: ".cpf", label: ".cpf_label", message: "O cpf é obrigatório" },
    { field: ".courses", label: ".courses_label", message: "O curso é obrigatório" },
    { field: ".cep", label: ".cep_label", message: "O cep é obrigatório" },
    { field: ".street", label: ".street_label", message: "A rua é obrigatória" },
    { field: ".neighborhood", label: ".neighborhood_label", message: "O bairro é obrigatório" },
    { field: ".city", label: ".city_label", message: "A cidade é obrigatória" },
    { field: ".federativeUnit", label: ".federativeUnit_label", message: "O estado é obrigatório" }
]

function fieldsIsEmpty(field) {
    return field.value.trim() === "";
}

export function validation() {

    let isValid = true;

    validationRules.forEach(rule => {
        const field = document.querySelector(rule.field);
        const label = document.querySelector(rule.label);

        if (!field || !label) {
            console.warn(`Atenção: Seletor ${rule.field} ou ${rule.label} não encontrado.`);
            return;
        }

        const labelInstruction = label.innerHTML;

        if (fieldsIsEmpty(field)) {
            label.innerHTML = labelInstruction + ` (${rule.message})`;
            isValid = false

        } else {
            label.innerHTML = labelInstruction;
            console.debug(labelInstruction)

        }
    })

    return isValid;

}

