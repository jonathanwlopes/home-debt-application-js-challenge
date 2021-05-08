import Images from "../../components/assets/img/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import footer from "../../components/Footer/index.js";
import Title from "../../components/Title/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import importStyles from "../../utils/import/css/index.js";

const Home = {
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

    const _footer = footer.build();

    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: "Nova Meta",
    });

    const _amountSmallCurrency2 = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleSmallCurrency2 = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinSmallCurrency2 = GenerateDiv.build({
      classList: ["join-currency"],
      children: [_titleSmallCurrency2, _amountSmallCurrency2],
    });

    const _progressBar = GenerateDiv.build({
      classList: ["progress-bar"],
    });
    const _titleReserve = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Reserva",
    });
    const _joinReserve = GenerateDiv.build({
      classList: ["join-reserve"],
      children: [_titleReserve, _progressBar],
    });

    const _iWallet2 = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle2 = GenerateDiv.build({
      classList: ["default-circle"],
      children: [_iWallet2],
    });

    const _joinCircleReserve = GenerateDiv.build({
      classList: ["join-icon-progress"],
      children: [_circle2, _joinReserve],
    });

    const _goalCase = GenerateDiv.build({
      classList: ["wallet-case", "margin-button"],
      children: [_joinCircleReserve, _joinSmallCurrency2],
    });

    const _titleGoal = Title.build({
      classList: ["title", "margin-title"],
      textContent: "Metas",
    });

    const _walletGoal = GenerateDiv.build({
      classList: ["wallet-box"],
      children: [_titleGoal, _goalCase, _button],
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
      classList: ["sub-title-middle"],
      textContent: "Nubank",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Carteira 01",
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
      classList: ["default-circle"],
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

    const _walletBox = GenerateDiv.build({
      classList: ["wallet-box"],
      children: [_walletCase],
    });

    const _scrollBox = GenerateDiv.build({
      classList: ["scroll-box"],
      children: [_walletBox, _walletGoal],
    });

    const _totalWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.totalWallet,
    });

    const _subAmount = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleCurrency = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
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

export default Home;
