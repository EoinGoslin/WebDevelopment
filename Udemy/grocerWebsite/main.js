/**
 * file: main.js
 * project: grocerWebsite
 * author: eoin 17252409
 * email: eoingoslin@gmail.com
 * created: Tuesday, 13th February 2018 12:35:01 pm
 * modified: Tuesday, 13th February 2018 1:14:45 pm
 * filepath: /home/eoin/Desktop/Udemy/grocerWebsite/main.js
 * comment: comment
 */
//


function myFunction() {
    var x = document.getElementById('form');
    var text = "";
    var i;
    for(i = 0; i <x.length; i++)
    {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById('demo').innerHTML = text;
}


