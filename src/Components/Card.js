import "./Card.css";

import Information from "./Information/Information";
import About from "./About/About";
import Interest from "./Interests/Interests";
import Footer from "./Footer/Footer";



export default function Card() {
  return (
    <div className="card">
      <Information />
      <About /> 
      <Interest /> 
      <Footer />
    </div>
  )
}