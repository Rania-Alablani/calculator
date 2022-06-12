let result = document.getElementById('result');

let allR = document.getElementById('allR');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                result.innerText = '';
                allR.innerText = '';
                break;
            case '=':
                try{
                    result.innerText = eval(allR.innerText);
                } catch {
                    result.innerText = "Error"
                }
                break;
            case 'DEL':
                if (result.innerText){
                    result.innerText = result.innerText.slice(0, -1);
                    allR.innerText = allR.innerText.slice(0, -1);
                }
                break;
            default:
                if ( !isNaN(e.target.innerText) ){
                    result.innerText = e.target.innerText;
                }
                allR.innerText += e.target.innerText;
        }
    });
});
