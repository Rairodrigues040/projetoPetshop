import React from "react";
import SecaoAdoteUmAmigo from "./SecaoAdoteUmAmigo";
import SecaoContribua from "./SecaoContribua";
import SecaoCompartilhe from "./SecaoCompartilhe";
import SecaoLaranja from "./SecaoLaranja";
import Header from "../header/Header";
import Footer from "../Footer/Footer";

const AdotePet = () => {
  return (
    <div>
      <Header/>
      <SecaoLaranja />
      <SecaoAdoteUmAmigo />
      <SecaoContribua />
      <SecaoCompartilhe />
      <Footer/>
    </div>
  );
};

export default AdotePet;
