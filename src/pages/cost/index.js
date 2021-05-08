import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Keyboard from "../../components/Keyboard/index.js";
import Nav from "../../components/Nav/index.js";
import Title from "../../components/Title/index.js";
import importStyles from "../../utils/import/css/index.js";

const Cost = {
  build: () => {
    const $root = document.querySelector("#root");

    importStyles({
      value: [
        StylesLink.global,
        StylesLink.nav,
        StylesLink.costBox,
        StylesLink.amountBox,
        StylesLink.container,
        StylesLink.keyboard,
        StylesLink.keyboardButton,
        StylesLink.footer,
        StylesLink.shared.text,
        StylesLink.shared.button,
        StylesLink.shared.circle,
        StylesLink.shared.icon,
      ],
    });

    const _footer = Footer.build();

    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: "Continuar",
    });

    const _keyboard = Keyboard.build();

    const _costBox = GenerateDiv.build({
      classList: ["cost-box"],
      children: [_keyboard, _button],
    });

    const _subAmount = Title.build({
      textContent: "100.000,00",
      classList: ["text-amount", "negative-color"],
    });

    const _titleCurrency = Title.build({
      classList: ["text-currency", "negative-color", "bold"],
      textContent: "R$",
    });

    const _joinCurrency = GenerateDiv.build({
      classList: ["join-currency"],
      children: [_titleCurrency, _subAmount],
    });

    const _amoutBox = GenerateDiv.build({
      classList: ["amount-box", "amount-box-gray"],
      children: [_joinCurrency],
    });

    const _nav = Nav.build();

    const _container = Element({
      typeElement: "section",
      classList: ["container"],
      children: [_nav, _amoutBox, _costBox, _footer],
    });

    $root.appendChild(_container);

    return _container;
  },
};

export default Cost;
