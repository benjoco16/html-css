var to1 = document.getElementById("201"),
    to2 = document.getElementById("202"),
    to3 = document.getElementById("304"),
    to4 = document.getElementById("302"),
    to5 = document.getElementById("206"),
    to6 = document.getElementById("301");

function sec() {    
    var sec1 = document.getElementsByName("sec_sec");
    for (var ii = 0, secc = sec1.length; ii < secc; ii++) {
        document.getElementsByName("sec_sec")[ii].checked = false; 
        document.getElementsByName("sec_sec")[ii].disabled = false;
        document.getElementsByName("third_sec")[ii].checked = false; 
        document.getElementsByName("third_sec")[ii].disabled = false;
        
    }
    if (document.getElementById('101').checked) {
        to1.disabled = true;
        to2.disabled = true;
        to4.disabled = true;
        to5.disabled = true;

    } else if (document.getElementById('102').checked) { 
        to1.disabled = true;
        to6.disabled = true;
    } else if (document.getElementById('103').checked) { 
        to2.disabled = true;
    }      
}   


function sec2()  {
    var sec_2 = document.getElementsByName("third_sec");
    for (var t = 0, tt = sec_2.length; t < tt; t++) {        
        document.getElementsByName("third_sec")[t].disabled = false;
    }
    if (document.getElementById('204').checked) { 
        document.getElementById("304").disabled = true;
    } else if (document.getElementById('205').checked) { 
        document.getElementById("304").disabled = true;    
    }

}  

function sec3()  { 
    var radios = document.getElementsByName("third_sec");
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            document.getElementById("submit").disabled = false;
            return true;
        }
    }
    return false;
}