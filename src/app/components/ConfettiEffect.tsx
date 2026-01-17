"use client";


import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function ConfettiEffect() {
  const { width, height } = useWindowSize();

  return <Confetti width={100} height={height} />;
}
