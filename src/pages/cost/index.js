import AmountBox from "../../components/AmoutBox/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Container from "../../components/Container/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Keyboard from "../../components/Keyboard/index.js";
import Nav from "../../components/Nav/index.js";
import Title from "../../components/Title/index.js";
import ValueTotal from "../../components/valueTotal/index.js";
import ValueTotalNegative from "../../components/ValueTotalNegative/index.js";
import importStyles from "../../utils/import/css/index.js";

const Cost = {
  build: () => {
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



    const _valueTotalNegative = ValueTotalNegative.build();

    const _amoutBox = AmountBox.build({
      classList: ["amount-box", "amount-box-gray"],
      children: [_valueTotalNegative],
    });

    const _nav = Nav.build();

    const _container = Container.build({
      children: [_nav, _amoutBox, _costBox, _footer],
    });

    return _container;
  },
};

export default Cost;
