function background1(){
    document.body.style.backgroundImage = "url('bg1.jpg')";
    document.getElementsByClassName("content")[0].innerHTML="Sunshine is the best medicine";
    document.body.style.color ="white";
}
function background2(){
    document.body.style.backgroundImage = "url('bg2.webp')";
    document.getElementsByClassName("content")[0].innerHTML="buy yourself the Freedom";
    document.body.style.color ="black";
}
function background3(){
    document.body.style.backgroundImage = "url('bg3.webp')";
    document.getElementsByClassName("content")[0].innerHTML="plan your trip to Dubai";
    document.body.style.color ="white";
}
function rs1(){
    
    document.getElementsByClassName("r1")[0].style.height="15px";
    document.getElementsByClassName("r1")[0].style.width="15px";
    document.getElementsByClassName("r1")[0].style.right="8px";
    document.getElementsByClassName("r2")[0].style.right="10px";
    document.getElementsByClassName("r3")[0].style.right="10px";
    document.getElementsByClassName("r1")[0].style.top="49.65%";
    document.getElementsByClassName("r2")[0].style.top="54%";
    document.getElementsByClassName("r3")[0].style.top="58%";
    document.getElementsByClassName("r2")[0].style.height="11px";
    document.getElementsByClassName("r2")[0].style.width="10px";
    document.getElementsByClassName("r3")[0].style.height="11px";
    document.getElementsByClassName("r3")[0].style.width="10px";
}
function rs2(){
    document.getElementsByClassName("r2")[0].style.height="15px";
    document.getElementsByClassName("r2")[0].style.width="15px";
    document.getElementsByClassName("r2")[0].style.right="8px";
    document.getElementsByClassName("r1")[0].style.right="10px";
    document.getElementsByClassName("r3")[0].style.right="10px";
    document.getElementsByClassName("r1")[0].style.top="50%";
    document.getElementsByClassName("r2")[0].style.top="53.65%";
    document.getElementsByClassName("r3")[0].style.top="58%";
    document.getElementsByClassName("r1")[0].style.height="11px";
    document.getElementsByClassName("r1")[0].style.width="10px";
    document.getElementsByClassName("r3")[0].style.height="11px";
    document.getElementsByClassName("r3")[0].style.width="10px";
}

function rs3(){
    document.getElementsByClassName("r3")[0].style.height="15px";
    document.getElementsByClassName("r3")[0].style.width="15px";
    document.getElementsByClassName("r3")[0].style.right="8px";
    document.getElementsByClassName("r1")[0].style.right="10px";
    document.getElementsByClassName("r2")[0].style.right="10px";
    document.getElementsByClassName("r1")[0].style.top="50%";
    document.getElementsByClassName("r2")[0].style.top="54%";
    document.getElementsByClassName("r3")[0].style.top="57.65%";
    document.getElementsByClassName("r2")[0].style.height="11px";
    document.getElementsByClassName("r2")[0].style.width="10px";
    document.getElementsByClassName("r1")[0].style.height="11px";
    document.getElementsByClassName("r1")[0].style.width="10px";
}
function login() {
    // Adds an element to the document
    document.getElementById("user").style.visibility="visible";
    document.getElementById("lock").style.visibility="visible";
    var p = document.getElementsByClassName("display")[0];
    var newElement = document.createElement("input");
    newElement.setAttribute("type","text");
    newElement.setAttribute('id', "field");
    newElement.setAttribute('placeholder', "user name");
    newElement.style.paddingLeft = "38px";

    var newElement2 = document.createElement("input");
    newElement2.setAttribute("type","password");
    newElement2.setAttribute('id', "field");
    newElement2.setAttribute('placeholder', "password");
    newElement2.style.paddingLeft = "38px";
    
    var toremove_element = document.getElementsByClassName("button")[0];
    toremove_element.parentNode.removeChild(toremove_element);
    var toremove_element2 = document.getElementsByClassName("button")[0];
    toremove_element2.parentNode.removeChild(toremove_element2);

    p.appendChild(newElement);
    p.appendChild(newElement2);

}
