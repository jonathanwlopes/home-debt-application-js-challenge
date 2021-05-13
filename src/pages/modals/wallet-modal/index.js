import Images from "../../../components/assets/img/index.js";
import StylesLink from "../../../components/assets/Styles/index.js";
import Container from "../../../components/Container/index.js";
import Element from "../../../components/element/index.js";
import GenerateDiv from "../../../components/GenerateDiv/index.js";
import Title from "../../../components/Title/index.js";
import importStyles from "../../../utils/import/css/index.js";

const WalletModal = {
  build: () => {
    importStyles({
      value: [
        StylesLink.global,
        StylesLink.container,
        StylesLink.modalBox,
        StylesLink.walletBox,
        StylesLink.walletCase,
        StylesLink.shared.text,
        StylesLink.shared.icon,
        StylesLink.shared.circle,
      ],
    });

    const _amountSmallCurrency = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleSmallCurrency = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinSmallCurrency = GenerateDiv.build({
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

    const _joinText = GenerateDiv.build({
      classList: ["join-text"],
      children: [_walletTitle, _walletSubTitle],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = GenerateDiv.build({
      classList: ["default-circle", "red"],
      children: [_iWallet],
    });

    const _joinCircleText = GenerateDiv.build({
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    const _walletCase = GenerateDiv.build({
      classList: ["wallet-case", "blue"],
      children: [_joinCircleText, _joinSmallCurrency],
    });

    const _modalBox = GenerateDiv.build({
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
