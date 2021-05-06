import Element from "../element/index.js";

const JoinCurrency = {
  build: (props) => {
    const _subAmount = Element({
      typeElement: "span",
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleCurrency = Element({
      typeElement: "span",
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleCurrency, _subAmount],
    });

    return _joinCurrency;
  },
};

export default JoinCurrency;
