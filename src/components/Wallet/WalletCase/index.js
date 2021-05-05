import Images from "../../assets/img/index.js";
import Element from "../../element/index.js";

const walletCase = {
  build: () => {
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
    const _subWallet = Element({
      typeElement: "span",
      classList: ["sub-title-middle"],
      textContent: "Nubank",
    });

    const _titleWallet = Element({
      typeElement: "span",
      classList: ["title-middle", "bold"],
      textContent: "Carteira 01",
    });

    const _joinText = Element({
      typeElement: "div",
      classList: ["join-text"],
      children: [_titleWallet, _subWallet],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = Element({
      typeElement: "div",
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinIcText = Element({
      typeElement: "div",
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });
    const _walletCase = Element({
      typeElement: "div",
      classList: ["wallet-case"],
      children: [_joinIcText, _joinCurrency],
    });

    return _walletCase;
  },
};

export default walletCase;
