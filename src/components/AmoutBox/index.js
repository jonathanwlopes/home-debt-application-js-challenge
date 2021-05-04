import Element from "../element/index.js";

const AmoutBox = {
  build: () => {
    const _joinCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
    });

    const _amoutBox = Element({
      typeElement: "div",
      classList: ["amout-box"],
      children: [_joinCurrency],
    });

    return _amoutBox;
  },
};

export default AmoutBox;
