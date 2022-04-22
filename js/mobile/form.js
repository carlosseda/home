import {validation} from './validation.js';

export let renderForm = () => {

    let forms = document.querySelectorAll(".front-form");
    let sendButton = document.getElementById("send-button");

    if(sendButton){

        sendButton.addEventListener("click", () => {
    
            forms.forEach(form => { 

                let formData = new FormData(form);
                let validate = validation(form);

                validate.onSuccess(() => {
                    
                    if( ckeditors != 'null'){
    
                        Object.entries(ckeditors).forEach(([key, value]) => {
                            formData.append(key, value.getData());
                        });
                    }

                    for (let pair of formData.entries()) {
                        console.log(pair[0] + ', ' + pair[1]);
                    }
                });

                validate.onFail(() => {

                });
            });
        });
    }
};