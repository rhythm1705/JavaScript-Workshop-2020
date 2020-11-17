// alert("hello");
let a = 5;
let hello = (num) => {
    alert(num + 10);
}
// alert(typeof (a));
// hello(a);
console.log("Hi there!");
console.log(document.body.parentNode);
let div = document.createElement('div');
div.innerHTML = '<ul><li>A study in scarlet</li><li>More novels</li><ul>';
document.body.append(div);

function switchToDark() {
    document.body.classList.toggle("dark");
    console.log("hi");
}

function validateForm() {
    let form = document.forms["contact"];
    if (form["name"].value !== "Rhythm") {
        alert("Not Rhythm,");
    }
    console.log(form, "hi");
}