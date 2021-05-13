import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const BillsCase = {
  build: () => {
    const _amountSmallCurrency = Title.build({
      classList: ["title-small"],
      textContent: "não pago",
    });

    const _titleSmallCurrency = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "-100",
    });

    const _joinSmallCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleSmallCurrency, _amountSmallCurrency],
    });

    const _walletSubTitle = Title.build({
      classList: ["title-small"],
      textContent: "Conta",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Tipo",
    });

    const _joinText = Element({
      typeElement: "div",
      classList: ["join-text"],
      children: [_walletTitle, _walletSubTitle],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = Element({
      typeElement: "div",
      classList: ["default-circle", "red"],
      children: [_iWallet],
    });

    const _joinCircleText = Element({
      typeElement: "div",
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    const _billsCase = Element({
      typeElement: "div",
      classList: ["wallet-case"],
      children: [_joinCircleText, _joinSmallCurrency],
    });

    return _billsCase;
  },
};

export default BillsCase;
