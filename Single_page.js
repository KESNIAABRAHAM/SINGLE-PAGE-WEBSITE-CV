const text = document.querySelector('.name');
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

printLetterByLetter("#name", "UCHENDU KESNIA", 500)

function changePicture(destination, image, speed){
    var imgCount = -1;
    var interval = setInterval(function (){
        if (imgCount != image.length - 1) {
            imgCount++;
        } else {
            imgCount = 0;
        }
        document.querySelector(destination).src = `pictures/${image[imgCount]}`;
    }, speed)
};

var pic = ['k.jpg','kesnia.jpg','kij.jpg','kkk.jpg','kkkk.jpg']
var img = document.querySelector('img');
changePicture('img', pic, 2000);
// for (let index = 0; index < pic.length; index++) {
//     const element = pic[index];
//     var link = `pictures/${element}`;
//     console.log(link);
//     img.src = link;
//     console.log(img.src)
// }