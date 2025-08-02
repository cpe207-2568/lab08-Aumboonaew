import React from "react";
import type { FooterProps } from "../libs/types";

const Footer: React.FC<FooterProps> = (props) => (
  <footer className="text-secondary text-center p-2 bg-light mt-auto">
    Copyright © {props.year} {props.fullName} {props.studentId}
  </footer>
);

export default Footer;
