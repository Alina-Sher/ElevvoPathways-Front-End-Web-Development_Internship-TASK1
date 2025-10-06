// ===== Contact Form Validation =====
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    showAlert("⚠️ Please fill out all fields.", "error");
    return;
  }

  // Basic email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showAlert("❌ Please enter a valid email address.", "error");
    return;
  }

  showAlert("✅ Thank you! Your message has been sent successfully.", "success");
  this.reset();
});

// ===== Alert Message Function =====
function showAlert(message, type) {
  const existingAlert = document.querySelector(".alert");
  if (existingAlert) existingAlert.remove();

  const alertDiv = document.createElement("div");
  alertDiv.className = `alert ${type}`;
  alertDiv.textContent = message;

  document.querySelector(".contact-container").prepend(alertDiv);

  setTimeout(() => alertDiv.remove(), 3000);
}
