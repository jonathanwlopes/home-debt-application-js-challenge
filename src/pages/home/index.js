import footer from "../../components/Footer/index.js";
import Title from "../../components/Title/index.js";
import Container from "../../components/Container/index.js";
import AmountBox from "../../components/AmoutBox/index.js";
import ValueTotal from "../../components/valueTotal/index.js";
import ScrollBox from "../../components/ScrollBox/index.js";
import MiddleBox from "../../components/MiddleBox/index.js";
import WalletCase from "../../components/WalletCase/index.js";
import ReserveCase from "../../components/reserveCase/index.js";
import Button from "../../components/shared/Button/index.js";
import Styles from "../../utils/import/css/index.js";
import Links from "../../utils/import/css/data/index.js";

const Home = {
  build: () => {
    Styles({
      value: [
        Links.global,
        Links.container,
        Links.amountBox,
        Links.walletBox,
        Links.walletCase,
        Links.scrollBox,
        Links.footer,
        Links.shared.text,
        Links.shared.icon,
        Links.shared.circle,
        Links.shared.progressBar,
        Links.shared.button,
      ],
    });

    const _footer = footer.build();

    const _button = Button.build({
      textContent: "Nova Meta",
    });

    const _reserveCase = ReserveCase.build();

    const _titleGoal = Title.build({
      classList: ["title", "margin-title"],
      textContent: "Metas",
    });

    const _goalBox = MiddleBox.build({
      children: [_titleGoal, _reserveCase, _button],
    });

    const _walletCase = WalletCase.build({
      classList: ['wallet-case']
    });

    const _walletBox = MiddleBox.build({
      children: [_walletCase],
    });

    const _scrollBox = ScrollBox.build({
      children: [_walletBox, _goalBox],
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

export default Home;
