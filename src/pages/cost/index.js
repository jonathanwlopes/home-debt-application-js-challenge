import AmoutBox from "../../components/AmoutBox/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import Nav from "../../components/Nav/index.js";
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
        StylesLink.keyboard,
        StylesLink.keyboardButton,
        StylesLink.footer,
        StylesLink.shared.text,
        StylesLink.shared.button,
        StylesLink.shared.circle,
        StylesLink.shared.icon,
      ],
    });
    

    const _amoutBox = AmoutBox.build();

    const _nav = Nav.build()

    const _container = Element({
      typeElement: "section",
      classList: ["container"],
      children: [_nav, _amoutBox]
    });

    $root.appendChild(_container);

    return _container;
  },
};

export default Cost;
