let name;

document.getElementById("myBtn").onclick = function(){
    name = document.getElementById("myText").value;
    document.getElementById("label").innerHTML = "Hello! " + name;
}