import Element from "../element/index.js";

const JoinCurrency = {
  build: (props) => {

    // const _totalWallet = Element({
    //   typeElement: "img",
    //   classList: ["icon"],
    //   src: Images.totalWallet,
    // });

    // const _subAmount = Element({
    //   typeElement: "span",
    //   classList: ["text-amount"],
    //   textContent: "100.000,00",
    // });

    // const _titleCurrency = Element({
    //   typeElement: "span",
    //   classList: ["text-currency"],
    //   textContent: "R$",
    // });

    const _joinCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: props,
    });

    return _joinCurrency;
  },
};

export default JoinCurrency;
