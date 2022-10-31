import { selector } from "recoil";
import dropDownState from "../Atom";

const charDropDownState = selector({
  key: "charDropDownState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const dropState = get(dropDownState);

    return dropState;
  },
});

export default charDropDownState;
