// Select all navigation links
const navLinks = document.querySelectorAll(".nav-links a");

// Smooth scroll behavior for all navbar links
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // prevent the default jump

    const targetId = this.getAttribute("href").substring(1); // remove '#'
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Calculate navbar height dynamically
      const navbar = document.querySelector(".navbar");
      const navbarHeight = navbar.offsetHeight;

      // Scroll to section minus navbar height
      const sectionTop = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth"
      });
    }

    // Update active class (optional highlight)
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Highlight active nav link when scrolling
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 120; // adjust for offset
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= scrollPos &&
      section.offsetTop + section.offsetHeight > scrollPos
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

//resume dowload
function downloadResume() {
  // Replace 'resume.pdf' with the actual file name and path
  const link = document.createElement('a');
  link.href = 'C:\Users\HP\OneDrive\Desktop\Project\portfolio\project\srisowmya.pdf';
  link.download = 'Sri_Sowmya_Resume.pdf';
  link.click();
}
