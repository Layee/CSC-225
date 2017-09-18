/**
 * Created by Abraham on 7/24/2017.
 */



function updateTotal(){
    var tot = 0;
    tot += f.python.value * 3 +
        f.java.value * 3.5 +
        f.php.value * 12 +
        f.ruby.value * 12;
    document.getElementById("cost").value = tot.toFixed(2);
}

var f = document.forms['myForm'];
var sel = document.getElementsByTagName("select");

for(var i=0; i<sel.length; i++) {
    sel[i].onchange = function(){updateTotal()};
}

f.onsubmit = function(){
    alert("Your total cost will be: \$" + f.cost.value);
    return false;
}