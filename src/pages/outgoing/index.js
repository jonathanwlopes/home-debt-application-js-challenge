import Images from "../../components/assets/img/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Title from "../../components/Title/index.js";
import importStyles from "../../utils/import/css/index.js";

const Outgoing = {
  build: () => {
    const $root = document.querySelector("#root");

    importStyles({
      value: [
        StylesLink.global,
        StylesLink.container,
        StylesLink.amountBox,
        StylesLink.walletBox,
        StylesLink.walletCase,
        StylesLink.scrollBox,
        StylesLink.footer,
        StylesLink.shared.text,
        StylesLink.shared.icon,
        StylesLink.shared.circle,
        StylesLink.shared.progressBar,
        StylesLink.shared.button,
      ],
    });

    const _footer = Footer.build();

    const _amountSmallCurrency = Title.build({
      classList: ["title-small"],
      textContent: "não pago",
    });

    const _titleSmallCurrency = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "-100",
    });

    const _joinSmallCurrency = GenerateDiv.build({
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
      classList: ["wallet-case"],
      children: [_joinCircleText, _joinSmallCurrency],
    });

    const _titleDate = Title.build({
      classList: ["title-middle", "bold", "margin-date"],
      textContent: "20/05",
    });

    const _walletBox = GenerateDiv.build({
      classList: ["wallet-box"],
      children: [_titleDate, _walletCase],
    });

    const _scrollBox = GenerateDiv.build({
      classList: ["scroll-box"],
      children: [_walletBox],
    });

    const _totalWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.totalWallet,
    });

    const _subAmount = Title.build({
      textContent: "100.000,00",
      classList: ["text-amount"],
    });

    const _titleCurrency = Title.build({
      textContent: "R$",
      classList: ["text-currency"],
    });

    const _joinCurrency = GenerateDiv.build({
      classList: ["join-currency"],
      children: [_titleCurrency, _subAmount, _totalWallet],
    });

    const _amoutBox = GenerateDiv.build({
      classList: ["amount-box"],
      children: [_joinCurrency],
    });

    const _container = Element({
      typeElement: "section",
      classList: ["container"],
      children: [_amoutBox, _scrollBox, _footer],
    });

    $root.appendChild(_container);

    return _container;
  },
};

export default Outgoing;
