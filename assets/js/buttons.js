function copyToClipboard(textToCopy, textToDisplay) {
    navigator.clipboard.writeText(textToCopy);
    const copyIndicator = document.getElementById("copied-message");
    document.getElementById("copied-message-text").innerText = textToDisplay || "Copiado correctamente!";
    
    // Animations handling
    copyIndicator.classList.add("fadeIn");
    copyIndicator.style.display = "block";
    setTimeout(() => {
        copyIndicator.classList.replace("fadeIn", "fadeOut");
    }, 2000);

    setTimeout(()=> {
        copyIndicator.style.display = "none";
        copyIndicator.classList.remove("fadeOut");
    }, 2175);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const copyEmailButtons = document.querySelectorAll(".copy-email-button")
    copyEmailButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const text = this.dataset.email.replace("mailto:", "");
            copyToClipboard(text, "Email copiado correctamente!");
        });
    });
});