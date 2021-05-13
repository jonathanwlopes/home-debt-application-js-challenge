import Images from "../../../components/assets/img/index.js";
import Container from "../../../components/Container/index.js";
import Element from "../../../components/element/index.js";
import Title from "../../../components/Title/index.js";
import Links from "../../../utils/import/css/data/index.js";
import Styles from "../../../utils/import/css/index.js";

const WalletModal = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

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
      classList: ["title-small"],
      textContent: "nome",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Carteira",
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

    const _walletCase = Element({
      typeElement: "div",
      classList: ["wallet-case", "blue"],
      children: [_joinCircleText, _joinSmallCurrency],
    });

    const _modalBox = Element({
      typeElement: "div",
      classList: ["modal-box"],
      children: [_walletCase],
    });

    const _container = Container.build({
      children: [_modalBox],
    });

    return _container;
  },
};

export default WalletModal;
