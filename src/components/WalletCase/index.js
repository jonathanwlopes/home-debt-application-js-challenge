import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const WalletCase = {
  build: (props) => {
    const _amountSmallCurrency = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleSmallCurrency = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinSmallCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleSmallCurrency, _amountSmallCurrency],
    });

    const _walletSubTitle = Title.build({
      classList: ["sub-title-middle"],
      textContent: "Nubank",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Carteira 01",
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
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinCircleText = Element({
      typeElement: "div",
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    const _walletCase = Element({
      typeElement: "div",
      classList: props.classList,
      children: [_joinCircleText, _joinSmallCurrency],
    });

    return _walletCase;
  },
};

export default WalletCase;
