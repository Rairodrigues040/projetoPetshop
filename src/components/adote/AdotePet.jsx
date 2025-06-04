import React from "react";
import SecaoAdoteUmAmigo from "./components/adote/SecaoAdoteUmAmigo";
import SecaoContribua from "./components/adote/SecaoContribua";
import SecaoCompartilhe from "./components/adote/SecaoCompartilhe";
import SecaoLaranja from "./components/adote/SecaoLaranja";

const AdotePet = () => {
  return (
    <div>
      <SecaoAdoteUmAmigo />
      <SecaoContribua />
      <SecaoCompartilhe />
      <SecaoLaranja />
    </div>
  );
};

export default AdotePet;
