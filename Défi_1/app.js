var xhr = new XMLHttpRequest();
var but = document.getElementById('button');
function getText() {
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            document.getElementById("output").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data.txt", true);
    xhr.send();
}
