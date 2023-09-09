import React from "react";
import FooterSubscribeForm from "./footer-subscribe-form";
import FooterLinks from "./footer-links";

function Footer() {
  return (
    <footer className="footer-wrapper bg-black text-white flex flex-col gap-4 px-2 md:px-16 pt-10">
      <FooterSubscribeForm />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
