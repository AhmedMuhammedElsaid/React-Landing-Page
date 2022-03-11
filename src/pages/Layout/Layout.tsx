import React from "react";
import PersonalSection from "components/PersonalSection";
import Navbar from "../../components/Navbar";
import Footer from "components/Footer";
import data from "assets/data";
import "./Layout.css";
import BarChart from "components/BarChart";
const Layout = () => {
  return (
    <div className="layout-holder">
      <Navbar />
      <PersonalSection />
      <BarChart data={data} width={809} height={355} domainY={[0, 1000]} />
      <Footer />
    </div>
  );
};

export default Layout;
