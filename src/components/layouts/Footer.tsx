import React from "react";

function Footer() {
  return (
    <footer className="py-4 d-flex justify-content-center bg-dark text-light">
      <p>Copyright &copy; @{new Date().getFullYear()} Mario Gunawan</p>
    </footer>
  );
}

export default Footer;
