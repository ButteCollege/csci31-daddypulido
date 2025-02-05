const toggleButton = document.getElementById("themeToggle");
const body = document.body


if(localStorage.getItem("darkMode")=== "enabled"){
    body.classList.add("dark-mode");
    toggleButton.textContent = "Toggle Light Mode"
} else {
    toggleButton.textContent = "Toggle Dark Mode"
}


toggleButton.addEventListener("click", ()=> {
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        localStorage.setItem("darkMode","enabled")
       toggleButton.textContent = "Toggle Light Mode"
    }else{
        localStorage.setItem("darkMode","disabled")
        toggleButton.textContent = "Toggle Dark Mode"

    }
})