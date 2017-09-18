
var radio,
    fullname,
    address,
    email,
    quantity = 0,
    total = 0;
var size = ['small', 'medium', 'large'];

window.onsubmit = (function () {
   fullname = document.getElementById("fullname").value;
    address = document.getElementById("address").value;
     email = document.getElementById("email").value;
     total = document.getElementById("total").value;
     quantity = document.getElementById("quantity").value;

    for (var i = 0; i < size.length; i++) {
         if(size[i].value === 'small') {
             total =  quantity * 10.00;
             console.log(total);
         }   else if (size[i].value === 'medium') {
              total = quantity * 15.00;
              console.log(total)
         }   else {
                total = 25.00 * quantity;
                console.log(total);
         }
    }



}());