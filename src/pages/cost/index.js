import AmountBox from "../../components/AmoutBox/index.js";
import Container from "../../components/Container/index.js";
import CostBox from "../../components/CostBox/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import Keyboard from "../../components/Keyboard/index.js";
import Nav from "../../components/Nav/index.js";
import ValueTotalNegative from "../../components/ValueTotalNegative/index.js";
import Links from "../../utils/import/css/data/index.js";
import Styles from "../../utils/import/css/index.js";

const Cost = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

    const _footer = Footer.build();

    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: "Continuar",
    });

    const _keyboard = Keyboard.build();

    const _costBox = CostBox.build({
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
