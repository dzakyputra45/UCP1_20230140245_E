// script.js

// Alert saat tombol daftar ditekan
document.addEventListener("DOMContentLoaded", () => {
  const daftarButton = document.querySelector(".contact-button");
  if (daftarButton) {
    daftarButton.addEventListener("click", () => {
      alert("Terima kasih telah mendaftar! Kami akan menghubungi Anda segera.");
    });
  }

  // Smooth scroll ke section (jika ada anchor dalam satu halaman)
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Efek animasi teks untuk judul
  const headline = document.querySelector("h1");
  if (headline) {
    headline.style.opacity = 0;
    setTimeout(() => {
      headline.style.transition = "opacity 1s ease-in-out";
      headline.style.opacity = 1;
    }, 300);
  }
});
