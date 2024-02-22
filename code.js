var input = document.getElementById('container');
var main = document.getElementById('main')

function yourPost() {
    container.style.display = "block";
    main.style.display = "none";
}
function closePic() {
    container.style.display = "none";
    main.style.display = "block";
}

var box = document.getElementById('box');

var text = document.getElementById('text');

var para = document.getElementById('para');
var post = document.getElementById('post');

//    function getValue() {
//     console.log(event.target.value);
//    }

function getElement() {
     box.style.display = "block";
    container.style.display = "none";
    main.style.display = "block";
    para.innerText = document.getElementById('text').value.trim(); 
    document.getElementById('text').value = "";
}