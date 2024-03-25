"use client"
import { TypewriterEffect } from "./ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "desenvolvedor",
    },
    {
      text: "frontend",
    },
    {
      text: ".",
      className: "font-extrabold text-blue-500 dark:text-blue-500",
    },
  ];
  return (

    <TypewriterEffect words={words} />

  );
}


