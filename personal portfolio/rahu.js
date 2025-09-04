 document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thanks for reaching out! Your message has been sent.");
      this.reset();
    });