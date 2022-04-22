import JustValidate from '../../node_modules/just-validate/dist/just-validate.es.js';

export let validation = (form) => {

    let invalidElements = document.querySelectorAll('.is-invalid');
    
    let validate = new JustValidate("#" + form.id, {
        errorFieldCssClass: 'is-invalid',
        focusInvalidField: true,
        lockForm: true,
        errorsContainer: '#errors-container',
    });

    if(invalidElements.length > 0){
        validate.destroy();
    }

    validate.addField('#name', [
        {
            rule: 'required',
            errorMessage: 'El campo nombre es obligatorio',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Añada al menos 3 caracteres en el nombre'
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'No puede añadir más de 30 caracteres en el nombre'
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'El campo email es obligatorio',
        },
        {
            rule: 'email',
            errorMessage: 'Introduzca un email válido',
        },
    ])

    return validate;
};