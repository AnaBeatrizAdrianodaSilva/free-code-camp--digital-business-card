import "./Footer.css";

import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <FaTwitterSquare className="icon" />
      <FaFacebookSquare className="icon" />
      <FaInstagramSquare className="icon" /> 
      <FaGithubSquare className="icon" />
    </div>
  )
}