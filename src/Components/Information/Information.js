import Photo from "../../img/photo.png";

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import "./Information.css";

export default function Information() {
  return (
    <div className="information">
      <img src={Photo} alt="Person " />

      <div className="information_text">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>
      </div>

      <div className="information_btn">
        <a href="/"> <MdEmail /> Email</a>
        <a href="/"> <FaLinkedin /> LinkedIn</a>
      </div>
    </div>
  )
}