import React from "react";
import SecaoAdoteUmAmigo from "./SecaoAdoteUmAmigo";
import SecaoContribua from "./SecaoContribua";
import SecaoCompartilhe from "./SecaoCompartilhe";
import SecaoLaranja from "./SecaoLaranja";

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
