import { useState } from "react";

export function useSlider() {
  const [ isSlider, setIsSlider ] = useState(false);

  return { isSlider, setIsSlider };
}