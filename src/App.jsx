/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Pankti Salvi",
  title: "Web Dev and ML Enthusiast",
  email: "panktisalvi1305@gmail.com",
  gitHub: "https://github.com/pankti13",
  instagram: "",
  linkedIn: "https://www.linkedin.com/in/pankti13/",
  leetcode: "https://leetcode.com/fabfjord013/",
  microsoftLearn: "https://learn.microsoft.com/en-us/users/panktisalvi-5946/",
  sheCodes: "https://www.shecodes.io/graduates/84386-pankti-salvi",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
