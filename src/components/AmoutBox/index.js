import Element from "../element/index.js";

const AmoutBox = {
  build: (props) => {
    const _amoutBox = Element({
      typeElement: "div",
      classList: ["amount-box"],
      children: props,
    });

    return _amoutBox;
  },
};

export default AmoutBox;
