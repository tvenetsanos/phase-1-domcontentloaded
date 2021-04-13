function loadDom(){
  text = document.getElementById("text")
  text.innerHTML = "This is really cool!";
}

document.addEventListener("DOMContentLoaded", function() {
    loadDom()
  });
