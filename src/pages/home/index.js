import Footer from "../../components/Footer/index.js";
import Title from "../../components/Title/index.js";
import Container from "../../components/Container/index.js";
import AmountBox from "../../components/AmoutBox/index.js";
import ValueTotal from "../../components/valueTotal/index.js";
import ScrollBox from "../../components/ScrollBox/index.js";
import MiddleBox from "../../components/MiddleBox/index.js";
import WalletCase from "../../components/WalletCase/index.js";
import Button from "../../components/shared/Button/index.js";
import Styles from "../../utils/import/css/index.js";
import Links from "../../utils/import/css/data/index.js";
import db_Bills from "../../components/data/index.js";
import GoalModal from "../modals/goal-modal/index.js";
import printGoal from "../../modules/printGoal/index.js";
import Element from "../../components/element/index.js";
import printWallet from "../../modules/printWallet/index.js";

const Home = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

    const user = db_Bills.getUserById(2);

    const _footer = Footer.build();

    const _button = Button.build({
      classList: ["default-button"],
      textContent: "Nova Meta",
    });

    _button.addEventListener("click", () => {
      const $container = document.querySelector(".container");

      _scrollBox.classList.add("inactive");

      const goalModal = GoalModal.build();

      $container.appendChild(goalModal);
    });

    const _titleGoal = Title.build({
      classList: ["title", "margin-title"],
      textContent: "Metas",
    });

    const _wrapperCases = Element({
      typeElement: "div",
      attribute: {
        id: "wrapper-cases",
      },
    });

    const _goalBox = MiddleBox.build({
      children: [_titleGoal, _wrapperCases, _button],
    });

    const _walletBox = MiddleBox.build({
      attribute: {
        id: "wallet-case",
      },
    });

    const _scrollBox = ScrollBox.build({
      children: [_walletBox, _goalBox],
    });

    const _valueTotal = ValueTotal.build({
      totalValue: user.totalValue.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }),
      currency: user.currency,
    });

    const _amoutBox = AmountBox.build({
      classList: ["amount-box"],
      children: [_valueTotal],
    });

    const _container = Container.build({
      children: [_amoutBox, _scrollBox, _footer],
    });

    printGoal(2);
    printWallet(2);

    return _container;
  },
};

export default Home;
