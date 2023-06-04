import { config } from "./config";

export function buildConfig(checkRadioKeysArr) {
  
  Object.values(config.checkRange).forEach(elObj => {
    elObj.min = 0;
    elObj.max = 100;
    elObj.default = 0;
  })
  
  checkRadioKeysArr.forEach(key => {
    config.checkRadio[key] = false;
  })
  
  return config;
}