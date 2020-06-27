function background1() {
    document.body.style.backgroundImage = "url('bg1.jpg')";
    document.getElementsByClassName("content")[0].innerHTML = "Sunshine is the best medicine";
    document.body.style.color = "white";
}
function background2() {
    document.body.style.backgroundImage = "url('bg2.webp')";
    document.getElementsByClassName("content")[0].innerHTML = "buy yourself the Freedom";
    document.body.style.color = "black";
}
function background3() {
    document.body.style.backgroundImage = "url('bg3.webp')";
    document.getElementsByClassName("content")[0].innerHTML = "plan your trip to Dubai";
    document.body.style.color = "white";
}
function rs1() {

    document.getElementsByClassName("r1")[0].style.height = "15px";
    document.getElementsByClassName("r1")[0].style.width = "15px";
    document.getElementsByClassName("r1")[0].style.right = "8px";
    document.getElementsByClassName("r2")[0].style.right = "10px";
    document.getElementsByClassName("r3")[0].style.right = "10px";
    document.getElementsByClassName("r1")[0].style.top = "49.65%";
    document.getElementsByClassName("r2")[0].style.top = "54%";
    document.getElementsByClassName("r3")[0].style.top = "58%";
    document.getElementsByClassName("r2")[0].style.height = "11px";
    document.getElementsByClassName("r2")[0].style.width = "10px";
    document.getElementsByClassName("r3")[0].style.height = "11px";
    document.getElementsByClassName("r3")[0].style.width = "10px";
}
function rs2() {
    document.getElementsByClassName("r2")[0].style.height = "15px";
    document.getElementsByClassName("r2")[0].style.width = "15px";
    document.getElementsByClassName("r2")[0].style.right = "8px";
    document.getElementsByClassName("r1")[0].style.right = "10px";
    document.getElementsByClassName("r3")[0].style.right = "10px";
    document.getElementsByClassName("r1")[0].style.top = "50%";
    document.getElementsByClassName("r2")[0].style.top = "53.65%";
    document.getElementsByClassName("r3")[0].style.top = "58%";
    document.getElementsByClassName("r1")[0].style.height = "11px";
    document.getElementsByClassName("r1")[0].style.width = "10px";
    document.getElementsByClassName("r3")[0].style.height = "11px";
    document.getElementsByClassName("r3")[0].style.width = "10px";
}

function rs3() {
    document.getElementsByClassName("r3")[0].style.height = "15px";
    document.getElementsByClassName("r3")[0].style.width = "15px";
    document.getElementsByClassName("r3")[0].style.right = "8px";
    document.getElementsByClassName("r1")[0].style.right = "10px";
    document.getElementsByClassName("r2")[0].style.right = "10px";
    document.getElementsByClassName("r1")[0].style.top = "50%";
    document.getElementsByClassName("r2")[0].style.top = "54%";
    document.getElementsByClassName("r3")[0].style.top = "57.65%";
    document.getElementsByClassName("r2")[0].style.height = "11px";
    document.getElementsByClassName("r2")[0].style.width = "10px";
    document.getElementsByClassName("r1")[0].style.height = "11px";
    document.getElementsByClassName("r1")[0].style.width = "10px";
}
function login() {
    // Adds an element to the document
    document.getElementById("user").style.visibility = "visible";
    document.getElementById("lock").style.visibility = "visible";

    var p = document.getElementsByClassName("display")[0];
    var q = document.getElementsByClassName("lbtn")[0];
    var newElement = document.createElement("input");
    newElement.setAttribute("type", "text");
    newElement.setAttribute('id', "field");
    newElement.setAttribute('placeholder', "user name");
    newElement.style.paddingLeft = "38px";

    var newElement2 = document.createElement("input");
    newElement2.setAttribute("type", "password");
    newElement2.setAttribute('id', "field");
    newElement2.setAttribute('placeholder', "password");
    newElement2.style.paddingLeft = "38px";

    var qelement = document.createElement("button");
    qelement.style.width = "40px";
    qelement.style.border = "none";
    qelement.style.backgroundColor = "rgb(36, 36, 46)";
    qelement.style.backgroundImage = "url('back.png')";
    qelement.style.backgroundSize = "60%";
    qelement.style.backgroundPosition = "center";
    qelement.style.backgroundRepeat = "no-repeat";
    qelement.style.borderRadius = "50%";
    qelement.setAttribute('id', "b1");
    qelement.setAttribute('onclick', 'loadmain()');
    qelement.setAttribute('onmouseover', 'showback();grow(this.id)');
    qelement.setAttribute('onmouseout', 'hideback();shrink(this.id)');

    var qelement2 = document.createElement("button");
    qelement2.style.width = "40px";
    qelement2.style.border = "none";
    qelement2.style.backgroundColor = "rgb(36, 36, 46)";
    qelement2.style.backgroundImage = "url('go.png')";
    qelement2.style.backgroundSize = "60%";
    qelement2.style.backgroundPosition = "center";
    qelement2.style.backgroundRepeat = "no-repeat";
    qelement2.style.borderRadius = "50%";
    qelement2.setAttribute('id', "b2");
    qelement2.setAttribute('onmouseover', 'goin();grow(this.id)');
    qelement2.setAttribute('onmouseout', 'goout();shrink(this.id)');

    var qelement3 = document.createElement("button");
    qelement3.style.width = "40px";
    qelement3.style.border = "none";
    qelement3.style.backgroundColor = "rgb(36, 36, 46)";
    qelement3.style.backgroundImage = "url('question.png')";
    qelement3.style.backgroundSize = "60%";
    qelement3.style.backgroundPosition = "center";
    qelement3.style.backgroundRepeat = "no-repeat";
    qelement3.style.borderRadius = "50%";
    qelement3.setAttribute('id', "b3");
    qelement3.setAttribute('onmouseover', 'showforgot();grow(this.id)');
    qelement3.setAttribute('onmouseout', 'hideforgot();shrink(this.id)');

    var toremove_element = document.getElementsByClassName("button")[0];
    toremove_element.parentNode.removeChild(toremove_element);
    var toremove_element2 = document.getElementsByClassName("button")[0];
    toremove_element2.parentNode.removeChild(toremove_element2);

    p.appendChild(newElement);
    p.appendChild(newElement2);
    q.appendChild(qelement);
    q.appendChild(qelement2);
    q.appendChild(qelement3);
}
function showback() {
    document.getElementById("back").style.visibility = "visible";
}
function hideback() {
    document.getElementById("back").style.visibility = "hidden";
}
function showforgot() {
    document.getElementById("forgot").style.visibility = "visible";
}
function hideforgot() {
    document.getElementById("forgot").style.visibility = "hidden";
}
function goin() {
    document.getElementById("b2").style.backgroundImage = "none";
    document.getElementById("b2").innerHTML = "Go";
}
function goout() {
    document.getElementById("b2").style.backgroundImage = "url('go.png')";
    document.getElementById("b2").innerHTML = "";
}
function grow(id) {
    document.getElementById(id).style.marginTop = "-4px";
    document.getElementById(id).style.width = "48px";
    document.getElementById(id).style.height = "48px";
    document.getElementById(id).style.backgroundSize = "70%";
}
function shrink(id) {
    document.getElementById(id).style.backgroundSize = "60%";
    document.getElementById(id).style.marginTop = "0";
    document.getElementById(id).style.width = "40px";
    document.getElementById(id).style.height = "40px";
}





function register() {
    document.getElementsByClassName("content")[0].style.visibility = "hidden";
    document.getElementsByClassName("reg")[0].style.visibility = "visible";
    var p = document.getElementsByClassName("reg")[0];
    var newElement = document.createElement("input");
    newElement.setAttribute("type", "text");
    newElement.setAttribute('class', "regelement");
    newElement.setAttribute('id', "regname");
    newElement.setAttribute('placeholder', "name");
    newElement.style.paddingLeft = "38px";
    p.appendChild(newElement);

    //var p = document.getElementsByClassName("reg")[0];
    var newElement2 = document.createElement("input");
    newElement2.setAttribute("type", "text");
    newElement2.setAttribute('class', "regelement");
    newElement2.setAttribute('id', "regemail");
    newElement2.setAttribute('placeholder', "email id");
    newElement2.style.paddingLeft = "38px";
    p.appendChild(newElement2);

    //var p = document.getElementsByClassName("reg")[0];
    var newElement3 = document.createElement("input");
    newElement3.setAttribute("type", "number");
    newElement3.setAttribute('class', "regelement");
    newElement3.setAttribute('id', "regphone");
    newElement3.setAttribute('placeholder', "phone number");
    newElement3.style.paddingLeft = "38px";
    p.appendChild(newElement3);

    var newElement4 = document.createElement("input");
    newElement4.setAttribute("type", "number");
    newElement4.setAttribute('class', "regelement");
    newElement4.setAttribute('id', "regage");
    newElement4.min = "1";
    newElement4.setAttribute('placeholder', "age");
    newElement4.style.paddingLeft = "38px";
    p.appendChild(newElement4);

    var newElement5 = document.createElement("button");
    newElement5.setAttribute('class', "reggender");
    newElement5.setAttribute('id', "regmale");
    newElement5.setAttribute('onclick', 'selectmale(this.id)');
    newElement5.setAttribute('onmouseover', "hovin(this.id)");
    newElement5.setAttribute('onmouseout', "hovout(this.id)");
    newElement5.style.width = "40px";
    newElement5.style.height = "40px";
    newElement5.style.border = "none";
    newElement5.style.backgroundImage = "url('male.png')";
    newElement5.style.backgroundSize = "60%";
    newElement5.style.backgroundPosition = "center";
    newElement5.style.backgroundRepeat = "no-repeat";
    p.appendChild(newElement5);

    var newElement6 = document.createElement("button");
    newElement6.setAttribute('class', "reggender");
    newElement6.setAttribute('id', "regfemale");
    newElement6.setAttribute('onclick', 'selectfemale(this.id)');
    newElement6.setAttribute('onmouseover', "hovin(this.id)");
    newElement6.setAttribute('onmouseout', "hovout(this.id)");
    newElement6.style.width = "40px";
    newElement6.style.height = "40px";
    newElement6.style.border = "none";
    newElement6.style.backgroundImage = "url('female.png')";
    newElement6.style.backgroundSize = "80%";
    newElement6.style.backgroundPosition = "center";
    newElement6.style.backgroundRepeat = "no-repeat";
    p.appendChild(newElement6);

    var newElement7 = document.createElement("button");
    newElement7.setAttribute('class', "reggender");
    newElement7.setAttribute('id', "regother");
    newElement7.setAttribute('onclick', 'selectother(this.id)');
    newElement7.setAttribute('onmouseover', "hovin(this.id)");
    newElement7.setAttribute('onmouseout', "hovout(this.id)");
    newElement7.style.width = "40px";
    newElement7.style.height = "40px";
    newElement7.style.border = "none";
    newElement7.style.backgroundImage = "url('trans.jpg')";
    newElement7.style.backgroundSize = "50%";
    newElement7.style.backgroundPosition = "center";
    newElement7.style.backgroundRepeat = "no-repeat";
    p.appendChild(newElement7);

    var newElement8 = document.createElement("input");
    newElement8.setAttribute("type", "password");
    newElement8.setAttribute('class', "regelement");
    newElement8.setAttribute('id', "regpassword");
    newElement8.setAttribute('placeholder', "password");
    newElement8.style.paddingLeft = "38px";
    p.appendChild(newElement8);

    var newElement9 = document.createElement("button");
    newElement9.setAttribute('class', "subbtn");
    newElement9.setAttribute('id', "submit");

    newElement9.setAttribute('onclick', 'validation()');
    newElement9.setAttribute('onmouseover', "hovin(this.id);dfont(this.id)");
    newElement9.setAttribute('onmouseout', "btnhovout(this.id);ifont(this.id)");
    newElement9.style.width = "120px";
    newElement9.style.height = "40px";
    newElement9.style.border = "none";
    newElement9.innerHTML = "sign up";
    p.appendChild(newElement9);

    var newElement10 = document.createElement("button");
    newElement10.setAttribute('class', "subbtn");
    newElement10.setAttribute('id', "regback");
    newElement10.setAttribute('onmouseover', "hovin(this.id);dfont(this.id)");
    newElement10.setAttribute('onmouseout', "btnhovout(this.id);ifont(this.id)");
    newElement10.setAttribute('onclick', 'loadmain()');
    newElement10.style.width = "100px";
    newElement10.style.height = "40px";
    newElement10.style.border = "none";
    newElement10.innerHTML = "back";
    p.appendChild(newElement10);

    var newElement11 = document.createElement("button");
    newElement11.setAttribute('class', "subbtn");
    newElement11.setAttribute('id', "regsupport");
    newElement11.setAttribute('onmouseover', "hovin(this.id);dfont(this.id)");
    newElement11.setAttribute('onmouseout', "btnhovout(this.id);ifont(this.id)");
    newElement11.style.width = "100px";
    newElement11.style.height = "40px";
    newElement11.style.border = "none";
    newElement11.innerHTML = "support";
    p.appendChild(newElement11);
}
var mselect=false;
var fselect=false;
var oselect=false;
function hovin(id) {
    document.getElementById(id).style.border = "2px solid white";
}
function btnhovout(id) {
    document.getElementById(id).style.border = "none";
}
function hovout(id) {
    if(mselect==false)
    document.getElementById("regmale").style.border = "none";
    if(fselect==false)
    document.getElementById("regfemale").style.border = "none";
    if(oselect==false)
    document.getElementById("regother").style.border = "none";
}
function dfont(id) {
    document.getElementById(id).style.fontSize = "12px";
    document.getElementById(id).style.font = "arial";
}
function ifont(id) {
    document.getElementById(id).style.fontSize = "16px";
    document.getElementById(id).style.font = "arial";
}
var gender = "";
function selectmale(id) {
    mselect=true;
    fselect=false;
    oselect=false;
    gender = "male";
    select(id);
    document.getElementById(id).style.border = "2px solid white";
    document.getElementById("regfemale").style.border = "none";
    document.getElementById("regother").style.border = "none";
    document.getElementById("regfemale").style.boxShadow = "none";
    document.getElementById("regother").style.boxShadow = "none";
}
function selectfemale(id) {
    mselect=false;
    fselect=true;
    oselect=false;
    gender = "female";
    select(id);
    document.getElementById(id).style.border = "2px solid white";
    document.getElementById("regmale").style.border = "none";
    document.getElementById("regother").style.border = "none";
    document.getElementById("regmale").style.boxShadow = "none";
    document.getElementById("regother").style.boxShadow = "none";
}
function selectother(id) {
    mselect=false;
    fselect=false;
    oselect=true;
    gender = "other";
    select(id);
    document.getElementById(id).style.border = "2px solid white";
    document.getElementById("regfemale").style.border = "none";
    document.getElementById("regmale").style.border = "none";
    document.getElementById("regfemale").style.boxShadow = "none";
    document.getElementById("regmale").style.boxShadow = "none";
}
function select(id) {
    document.getElementById(id).style.boxShadow = "0 0 10px 8px rgb(173, 169, 169)";
}

function validation() {
    var flag = 1;
    var call=1;
    var name = document.getElementById("regname").value;
    var email = document.getElementById("regemail").value;
    var phone = Number(document.getElementById("regphone").value);
    var age = Number(document.getElementById("regage").value);
    var password = document.getElementById("regpassword").value;
    console.log(gender);
    if (gender == "") {
        
        document.getElementById("exclaimgender").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else{
        document.getElementById("exclaimgender").style.visibility = "hidden";
    }

    if (name == "") {
        document.getElementById("regname").style.border = "2px solid red";
        document.getElementById("exclaimname").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (name.length > 30) {
        document.getElementById("regname").style.border = "2px solid red";
        document.getElementById("exclaimname").style.visibility = "visible";
        alert("name cannot be more than 30 letters!!");
        flag = 0;
        call=0;
    }
    else if (name != "") {
        flag = 1;
    }
    if (flag == 1){
        document.getElementById("regname").style.border = "2px solid black";
        document.getElementById("exclaimname").style.visibility = "hidden";
    }
    if (email == "") {
        document.getElementById("regemail").style.border = "2px solid red";
        document.getElementById("exclaimemail").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        flag = 1;
    }
    else {
        document.getElementById("regemail").style.border = "2px solid red";
        document.getElementById("exclaimemail").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    if (flag == 1){
        document.getElementById("regemail").style.border = "2px solid black";
        document.getElementById("exclaimemail").style.visibility = "hidden";
    }
    if (phone == "") {
        document.getElementById("regphone").style.border = "2px solid red";
        document.getElementById("exclaimphone").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (digcount(phone) > 15 || phone < 1) {
        document.getElementById("regphone").style.border = "2px solid red";
        document.getElementById("exclaimphone").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (flag == 1){
        document.getElementById("regphone").style.border = "2px solid black";
        document.getElementById("exclaimphone").style.visibility = "hidden";
    }
    if (age == 0) {
        document.getElementById("regage").style.border = "2px solid red";
        document.getElementById("exclaimage").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (age < 1 || age > 100) {
        document.getElementById("regage").style.border = "2px solid red";
        document.getElementById("exclaimage").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (flag == 1){
        document.getElementById("regage").style.border = "2px solid black";
        document.getElementById("exclaimage").style.visibility = "hidden";
    }
    if (password == "") {
        document.getElementById("regpassword").style.border = "2px solid red";
         document.getElementById("exclaimpassword").style.visibility = "visible";
        flag = 0;
        call=0;
    }
    else
        flag = 1;
    if (flag == 1) {
        document.getElementById("exclaimpassword").style.visibility = "hidden";
        document.getElementById("regpassword").style.border = "2px solid black";
    }
    if(call==1)
    sendData();
}
function sendData() {
    var data = {
        name: document.getElementById("regname").value,
        age: Number(document.getElementById("regage").value),
        sex: gender,
        email: document.getElementById("regemail").value,
        phone: Number(document.getElementById("regphone").value),
        password: document.getElementById("regpassword").value
    }
    var myJSON = JSON.stringify(data);
    console.log(myJSON);
    jQuery.ajax({
        url: "http://localhost:3000/user/adduser",
        type: "POST",
        data: myJSON,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            
            console.log(r);
        },
        failure: function (r) {
            alert(r.d);
        },
        error: function(r){
            alert(r.d);
        }


    });

}

var script = document.createElement('script'); 
script.src ="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
document.head.appendChild(script) ;


function digcount(n) {
            var count = 0;
            if (n >= 1) ++count;

            while (n / 10 >= 1) {
                n /= 10;
                ++count;
            }

            return count;
        }