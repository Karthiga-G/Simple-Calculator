let displayvalue='';

function appendtodisplay(value){
    displayvalue+= value;
    document.getElementById('display').value= displayvalue;
}

function calculate(){
    try{
        displayvalue= eval(displayvalue).toString();
        document.getElementById('display').value = displayvalue;
    }
    catch(error){
        document.getElementById('display').value= 'Error';
    }
}

function clearDisplay(){
    displayvalue= '';
    document.getElementById('display').value= displayvalue;
}

document.addEventListener('keydown', (event)=>{
    const key= event.key;
    switch(key){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            appendtodisplay(key);
            break;

        case '+':
        case '-':
        case '*':
        case '/':
        case '(':
        case ')':
        case '.':
            appendtodisplay(key);
            break;

        case 'Backspace':
            clearDisplay();
            break;
    
        case 'Enter':
            calculate();
            break;

        default:
            break;
    }
})