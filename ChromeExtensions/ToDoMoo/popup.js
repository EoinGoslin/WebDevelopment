var count = 0;
var array = [];
var i = 0;
var ID = 3;

document.addEventListener('DOMContentLoaded', function() {
    var enterBtn = document.getElementById('enterBtn');
    var userInput = document.getElementById("userinput");
    var listItems=document.getElementsByTagName("li");
    function checkLength() {
        if(userInput.value.length > 0) {
            return true;
        } 
        return false;
    }
    document.getElementById("parent-list").addEventListener("click",function(e) {
        // e.target is our targetted element.
                    // try doing console.log(e.target.nodeName), it will result LI
        if(e.target && e.target.nodeName == "LI") {
           var fin = document.getElementById(e.target.id);
           fin.setAttribute("class", "done");
        
        }
    });
    
    var u = document.querySelector("ul");
    chrome.storage.sync.get("value", function (obj) {
    if(obj!==null) {
        console.log(obj.value[i]);
        while(obj.value[i]!=null) {

        var l = document.createElement("li");
        
        l.appendChild(document.createTextNode(obj.value[i]));
        u.appendChild(l);
        i++;


        }
        

    }
    
    
});

    enterBtn.addEventListener('click', function() {
        if(checkLength()) {
        var ul = document.querySelector("ul");

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        li.setAttribute("id", ID);
        ID++;
        
        ul.appendChild(li);
        array[count] = userInput.value;

    chrome.storage.sync.set({'value': array}, function() {
        // Notify that we saved.
        console.log('listItemSaved');
      });
        count++;
        }
        
        
})
});

