import ConfettiEffect from "react-confetti";
import React from "react";

export const Confetti = ({ showConfetti }) => {

  return showConfetti && <ConfettiEffect />;
};
