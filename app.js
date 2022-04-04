var button1 = document.querySelector(".btn-translate");
var button2 = document.querySelector(".btn-translate2");
var text_input = document.querySelector(".tt");
var output = document.querySelector(".output-div");
var url = "https://api.funtranslations.com/translate/minion.json";
var url2 = "https://api.funtranslations.com/translate/emoji.json";

function clicked_btn(){
    url = url+"?text="+text_input.value;
    fetch(url)
    .then(response => response.json())
    .then(json => output.innerText =json.contents.translated);
}
function clicked_btn2(){
     url2 = url2+"?text="+text_input.value;
     fetch(url2)
     .then(response => response.json())
     .then(json => output.innerText =json.contents.translated);
}
button1.addEventListener("click",clicked_btn);
button2.addEventListener("click",clicked_btn2);