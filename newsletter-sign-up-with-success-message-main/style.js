
let inputEl =document.getElementById("email");

let form = document.getElementById("form");

let error = document.getElementById("error");

let success = document.getElementById("success");

let txt = document.getElementById("span-txt");

let container = document.getElementById("container");

form.addEventListener("submit", (e)=>{
e.preventDefault();

if(inputEl.value.length===""){
error.style.visibility="visible";
inputEl.style.border="1px solid red";
}

else if(inputEl.value.indexOf("@") === -1){
error.style.visibility = "visible";
inputEl.style.border = "1px solid red";
}

else{
success.style.display="block";
txt.innerHTML= inputEl.value;
container.style.display="none";
}
});

