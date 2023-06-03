import { useState } from "react";
import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/dist/nouislider.css";

export const NoUiSlider = () => (
  <Nouislider range={{ min: 0, max: 100 }} start={[20, 80]} connect />
);