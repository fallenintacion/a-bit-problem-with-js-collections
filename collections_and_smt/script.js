let radioButtons = document.querySelectorAll('.radiobutton');
let submitButton = document.querySelector('.submit-button');

for (rButton of radioButtons){
    rButton.onchange = function () {
        console.log(rButton.dataset.evaluation);

        /*
        if (rButton.dataset.evaluation === 'bad'){
            submitButton.disabled = true;
        }
        else{
            submitButton.disabled = false;

        }
        */


    }

}
