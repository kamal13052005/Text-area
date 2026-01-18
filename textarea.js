    var textarea = document.getElementById("myTextarea")
    var countDisplay = document.getElementById("char-count")
    var submittext=document.getElementById("btnsub")
    textarea.addEventListener("input", function() {
        var length = textarea.value.length
        countDisplay.textContent = length
        if (length >= 200) {
            countDisplay.style.color = "red"
        } 
        else if (length >= 150) {
            countDisplay.style.color = "orange"
        } 
        else {
            countDisplay.style.color = "gray"
            textarea.style.borderColor = "silver"
        }
    });