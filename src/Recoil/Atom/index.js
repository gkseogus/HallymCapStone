// atom.js
import { atom } from "recoil";

let dropDownState = atom({
  key: "dropDownState",
  default: "ko",
});

export default dropDownState;
