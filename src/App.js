import "./App.css";

import React from "react";
import Header from "./components/header/Header";
import Company from "./components/company/Company";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="backGround">
      <Header />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
