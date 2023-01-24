//const { func } = require("prop-types");

//const img = document.querySelector('.ol');
const text = document.querySelector('.name');


/*var imageSources = [];
images[0] = ['kesnia.jpg'];
images[1] = ['k.jpg'];
images[2] = ['kij.jpg'];
images[3] = ['kk.jpg'];
images[4] = ['kkk.jpg']; 
var index = 0;
function change(){
    document.mainphoto.src = imageSources[index];
    if(index == 2){ 
        index = 0; 
    }else{
        index++;
    }
    setInterval(change(),1000);
        
    }
window.onload = change();*/

//var paths = `http://127.0.0.1:5500/Single%20page%20website/images/{}`;

function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function () {
        document.querySelector(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter("#name", " MY NAME IS  UCHENDU KESNIA", 500)