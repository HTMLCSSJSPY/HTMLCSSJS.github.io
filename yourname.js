function myFunction() {
  let person = prompt("Please enter your name", "Your name");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! Welcome to my website!";
  }
}