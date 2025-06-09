import React from "react";
import SecaoAdoteUmAmigo from "./SecaoAdoteUmAmigo";
import SecaoContribua from "./SecaoContribua";
import SecaoCompartilhe from "./SecaoCompartilhe";
import SecaoLaranja from "./SecaoLaranja";
import HeaderLogado from "../headerlogado/Header";
import Footer from "../Footer/Footer";

const AdotePet = () => {
  return (
    <div>
      <HeaderLogado />
      <SecaoLaranja />
      <SecaoAdoteUmAmigo />
      <SecaoContribua />
      <SecaoCompartilhe />
      <Footer/>
    </div>
  );
};

export default AdotePet;
