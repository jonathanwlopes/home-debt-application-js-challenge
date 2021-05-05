import Images from "../assets/img/index.js";
import Element from "../element/index.js";

const AmoutBox = {
  build: () => {
    const _totalWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.totalWallet,
    });

    const _titleAmount = Element({
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
      children: [_titleCurrency, _titleAmount, _totalWallet],
    });

    const _amoutBox = Element({
      typeElement: "div",
      classList: ["amount-box"],
      children: [_joinCurrency],
    });

    return _amoutBox;
  },
};

export default AmoutBox;
