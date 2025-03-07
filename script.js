(function () {
  // Initialize EmailJS with your Public Key
  emailjs.init("FS4VLnclagfqrC81p"); // Replace with your EmailJS Public Key
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Validate inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const submitButton = this.querySelector("button");
    submitButton.disabled = true; // Disable the button
    submitButton.textContent = "Sending...";

    const serviceID = "service_u7ieh88"; // Replace with your EmailJS Service ID
    const templateID = "template_ybxdh13"; // Replace with your EmailJS Template ID

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset(); // Clear the form
        submitButton.disabled = false; // Re-enable the button
        submitButton.textContent = "Send Message";
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert(`Failed to send the message. Error: ${error.text || error}`);
        submitButton.disabled = false; // Re-enable the button
        submitButton.textContent = "Send Message";
      });
  });
