var price = document.querySelectorAll("#pirce");
var btn = document.querySelectorAll(".buy");
var del = document.querySelectorAll(".delete")
for(let i =0 ;i< btn.length;i++){
     
    btn[i].addEventListener("click",function(){
     
        total()
    });
}
for( let x =0 ; x<del.length; x++){
    del[x].addEventListener("click",function(){
        total()
    });
}
function total(){
    var sum=0;
    var price = document.querySelectorAll("#pirce");
    var btn = document.querySelectorAll(".buy");
    for (let i = 0; i < price.length; i++) {
        sum += price[i].innerHTML
    }
    document.getElementById('total').innerHTML = sum 
}