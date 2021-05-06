import AmoutBox from "../../components/AmoutBox/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import CaseProgress from "../../components/CaseProgress/index.js";
import Element from "../../components/element/index.js";
import footer from "../../components/Footer/index.js";
import JoinCurrency from "../../components/JoinCurrency/index.js";
import JoinIcProgress from "../../components/JoinIcProgress/index.js";
import JoinIcText from "../../components/joinIcText/index.js";
import ScrollBox from "../../components/ScrollBox/index.js";
import walletBox from "../../components/Wallet/WalletBox/index.js";
import walletCase from "../../components/Wallet/WalletCase/index.js";
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

    const _joinCurrency = JoinCurrency.build();

    const _joinIcProgress = JoinIcProgress.build();

    const _caseProgress = CaseProgress.build([_joinIcProgress, _joinCurrency]);

    const _titleBox2 = Element({
      typeElement: "h2",
      classList: ["title", "margin-title"],
      textContent: "Metas",
    });

    const _walletBox2 = walletBox.build([_titleBox2, _caseProgress, _button]);

    const _joinIcText = JoinIcText.build({
      title: "Carteira 01",
      subTitle: "Nubank",
    });

    const _walletCase = walletCase.build([_joinIcText, _joinCurrency]);

    const _walletBox = walletBox.build([_walletCase]);

    const _scrollBox = ScrollBox.build([_walletBox, _walletBox2]);

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

export default Home;
