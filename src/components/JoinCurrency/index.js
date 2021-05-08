import Element from "../element/index.js";

const JoinCurrency = {
  build: (props) => {
    const _joinCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: props,
    });

    return _joinCurrency;
  },
};

export default JoinCurrency;
