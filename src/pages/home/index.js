import AmoutBox from "../../components/AmoutBox/index.js";
import Images from "../../components/assets/img/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import CaseProgress from "../../components/CaseProgress/index.js";
import Element from "../../components/element/index.js";
import footer from "../../components/Footer/index.js";
import JoinCurrency from "../../components/JoinCurrency/index.js";
import JoinIcProgress from "../../components/JoinIcProgress/index.js";
import JoinIcText from "../../components/joinIcText/index.js";
import ScrollBox from "../../components/ScrollBox/index.js";
import TitleCurrency from "../../components/TitleCurrency/index.js";
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

    const _titleCurrency2 = TitleCurrency.build({textContent: 'R$'});

    const _joinCurrency2 = JoinCurrency.build([_titleCurrency2]);

    const _joinIcProgress = JoinIcProgress.build();

    const _caseProgress = CaseProgress.build([_joinIcProgress, _joinCurrency2]);

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

    const _walletCase = walletCase.build([_joinIcText, _joinCurrency2]);

    const _walletBox = walletBox.build([_walletCase]);

    const _scrollBox = ScrollBox.build([_walletBox, _walletBox2]);

    const _totalWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.totalWallet,
    });

    const _subAmount = Element({
      typeElement: "span",
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleCurrency = TitleCurrency.build({textContent: 'R$'})

    const _joinCurrency = JoinCurrency.build([_titleCurrency, _subAmount, _totalWallet])

    const _amoutBox = AmoutBox.build([_joinCurrency]);

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
