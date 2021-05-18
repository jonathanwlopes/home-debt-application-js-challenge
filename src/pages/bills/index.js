import AmountBox from "../../components/AmoutBox/index.js";
import Container from "../../components/Container/index.js";
import Footer from "../../components/Footer/index.js";
import ScrollBox from "../../components/ScrollBox/index.js";
import Title from "../../components/Title/index.js";
import ValueTotal from "../../components/valueTotal/index.js";
import MiddleBox from "../../components/MiddleBox/index.js";
import BillsCase from "../../components/BillsCase/index.js";
import Styles from "../../utils/import/css/index.js";
import Links from "../../utils/import/css/data/index.js";
import db_Bills from "../../components/data/index.js";

const Bills = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

    const user = db_Bills.getUserById(2);

    const _footer = Footer.build();

    const _billsCase = BillsCase.build();

    const _titleDate = Title.build({
      classList: ["title-middle", "bold", "margin-date"],
      textContent: new Date().toLocaleDateString("pt-BR", { timeZone: "UTC" }),
    });

    const _billsBox = MiddleBox.build({
      children: [_titleDate, _billsCase],
    });

    const _scrollBox = ScrollBox.build({
      children: [_billsBox],
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

    return _container;
  },
};

export default Bills;
