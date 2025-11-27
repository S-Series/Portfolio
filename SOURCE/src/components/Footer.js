import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";
import { useProfile } from "../contexts/UseProfile";

import "./Footer.css";

export default function Footer() {
  const { isScrolled } = useProfile();

  return (
    <div
      id="footer-body"
      className={`${isScrolled ? "scrolled" : ""}`}>
      <span>asdf</span>
    </div>
  );
}
