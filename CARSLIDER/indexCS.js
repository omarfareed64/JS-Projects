let list = ["car1.jpg","car2.jpg","car3.jpg","car4.jpg"];

let index = list.length % 2 == 0 ? (list.length/2)-1: (list.length-1/2);
let next = document.getElementById("next");

let back = document.getElementById("back");
carPlaceholder = document.getElementById("carplaceholder"); 
carPlaceholder.src = list[index];
console.log(index)

next.onclick = function() {
    if(index < list.length-1) {
        index++;
    } else {
        index = 0;
    }
    carPlaceholder.src = list[index];
}
back.onclick = function() {
    if (index>0){
        index--;
    }
    else{
        index=list.length-1;
    }
    carPlaceholder.src = list[index];
}

