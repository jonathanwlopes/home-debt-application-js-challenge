import AmountBox from "../../components/AmoutBox/index.js";
import Images from "../../components/assets/img/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Container from "../../components/Container/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Title from "../../components/Title/index.js";
import ValueTotal from "../../components/valueTotal/index.js";
import importStyles from "../../utils/import/css/index.js";

const Outgoing = {
  build: () => {
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

    const _valueTotal = ValueTotal.build();

    const _amoutBox = AmountBox.build({
      classList: ["amount-box"],
      children: [_valueTotal],
    });

    const _container = Container.build({
      children: [_amoutBox, _scrollBox, _footer],
    });

    return _container;
  },
};

export default Outgoing;
