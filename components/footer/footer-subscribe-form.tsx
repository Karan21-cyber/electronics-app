import { subscribe } from "diagnostics_channel";
import React from "react";

function FooterSubscribeForm() {
  return (
    <div className="footer-subscribe-wrapper flex  flex-col sm:flex-row justify-between items-center gap-4">
      <div className="footer-highlight-wrapper flex flex-col gap-2">
        <h1 className="footer-highlight capitalize text-base md:text-4xl font-medium text-white">
          Sign Up To Our Newsletter.
        </h1>
        <p className="footer-subscription-info text-xs md:text-base font-[300]">
          Be the first to hear about the latest offers.
        </p>
      </div>
      <form className="input-field-wrapper flex gap-6 h-[38px] md:h-[50px]">
        <input
          type="email"
          placeholder="Your Email"
          className="input-container text-[10px] font-[300] md:text-sm text-white bg-transparent outline-none border-2 w-[150px] md:w-[320px]  border-white pl-2 rounded"
        />
        <input
          type="submit"
          value="subscribe"
          className="input-button bg-sky-blue rounded-3xl text-[10px] px-6 md:px-10 md:text-xs"
        />
      </form>
    </div>
  );
}

export default FooterSubscribeForm;
