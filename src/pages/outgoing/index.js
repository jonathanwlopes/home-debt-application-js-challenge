import AmoutBox from "../../components/AmoutBox/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import JoinIcText from "../../components/joinIcText/index.js";
import JoinPayable from "../../components/JoinPayable/index.js";
import ScrollBox from "../../components/ScrollBox/index.js";
import walletBox from "../../components/Wallet/WalletBox/index.js";
import walletCase from "../../components/Wallet/WalletCase/index.js";
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

    const _joinPayable = JoinPayable.build({title: '-100', subTitle: 'não pago'})

    const _joinIcText = JoinIcText.build({ title: "Tipo", subTitle: "Conta" });

    const _titleDate = Element({
      typeElement: "h2",
      classList: ["title-middle", "bold", "margin-date"],
      textContent: "20/04",
    });

    const _walletCase = walletCase.build([_joinIcText, _joinPayable]);

    const _walletBox = walletBox.build([_titleDate, _walletCase]);

    const _scrollBox = ScrollBox.build([_walletBox]);

    const _amoutBox = AmoutBox.build();

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
