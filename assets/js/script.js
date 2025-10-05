const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
});

// Hero background slider
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000); // change every 5 seconds


// ===========================
// Appointment Modal Script (Enhanced)
// ===========================

const modal = document.getElementById("appointmentModal");
const openBtn = document.getElementById("openAppointment");
const closeBtn = document.getElementById("closeModal");
const form = document.getElementById("appointmentForm");
const successMsg = document.getElementById("successMessage");
const closeSuccess = document.getElementById("closeSuccess");
const serviceSelect = document.getElementById("service");
const otherField = document.getElementById("otherServiceField");

// ---- Open Modal ----
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// ---- Close Modal ----
closeBtn.addEventListener("click", closeModal);
closeSuccess.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ---- Close Modal Function ----
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
  resetForm();
}

// ---- Toggle “Other” Field ----
serviceSelect.addEventListener("change", () => {
  if (serviceSelect.value === "Other") {
    otherField.classList.add("show");
  } else {
    otherField.classList.remove("show");
    document.getElementById("otherService").value = "";
  }
});

// ---- Form Submission ----
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // You can add AJAX / backend logic here later
  form.style.display = "none";
  successMsg.style.display = "block";
});

// ---- Reset Form ----
function resetForm() {
  form.reset();
  form.style.display = "block";
  successMsg.style.display = "none";
  otherField.classList.remove("show");
}
