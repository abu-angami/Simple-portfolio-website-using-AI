document.getElementById("explore-btn").addEventListener("click", () => {
    window.scrollTo({
        top: document.getElementById("about").offsetTop,
        behavior: "smooth"
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.getElementById("form-response").innerHTML = `
        <p>Thank you, Senpai! Your message has been sent successfully.</p>
    `;
    this.reset();
});
