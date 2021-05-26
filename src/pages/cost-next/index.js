import CategoryCase from "../../components/CategoryCase/index.js";
import Container from "../../components/Container/index.js";
import CostBox from "../../components/CostBox/index.js";
import db_Bills from "../../components/data/index.js";
import DateParcelCase from "../../components/DateParcelCase/index.js";
import Element from "../../components/element/index.js";
import FieldCase from "../../components/FieldCase/index.js";
import Footer from "../../components/Footer/index.js";
import Nav from "../../components/Nav/index.js";
import Button from "../../components/shared/Button/index.js";
import TagCase from "../../components/TagCase/index.js";
import WalletCase from "../../components/WalletCase/index.js";
import Links from "../../utils/import/css/data/index.js";
import Styles from "../../utils/import/css/index.js";

const CostNext = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

    const _footer = Footer.build();

    const _button = Button.build({
      classList: ["default-button"],
      textContent: "Concluir",
    });

    _button.addEventListener("click", () => {
      const $totalValue = document.querySelector("#typed");
      const $date = document.querySelector("#date");
      const $tick = document.querySelector("#tick");
      const $parcel = document.querySelector("#parcel");
      const $tags = document.querySelectorAll("#id-tag");
      const $obs = document.querySelector(".text-area");

      const listTags = [];

      for (let i = 0; i < $tags.length; i++) {
        const tag = $tags[i].textContent;
        listTags.push(tag);
      }

      db_Bills.createBills(2, {
        _id: 600,
        typePay: "Dinheiro",
        totalValue: $totalValue.textContent,
        dueDate: $date.value,
        pay: false,
        parcel: {
          splitValue: $tick.classList.contains("inactive") ? false : true,
          amountSplit: Number($parcel.value),
        },
        tag: listTags,
        obs: $obs.value,
      });

      location.href = 'http://127.0.0.1:5500/src/pages-dinamic/cost/index.html'
    });

    const _textArea = Element({
      typeElement: "textarea",
      classList: ["text-area"],
      attribute: {
        placeholder: "Obs",
      },
    });

    const _tagCase = TagCase.build();

    const _dateParcelCase = DateParcelCase.build();

    const _categoryCase = CategoryCase.build();

    const _walletCase = WalletCase.build({
      classList: ["wallet-case", "blue"],
      type: "Poupança",
      bank: "Itau",
      currency: "$",
      value: "50.000,00",
    });

    const _valueCase = FieldCase.build({
      textContent: "100", // BUG FIX
    });

    const _costBox = CostBox.build({
      children: [
        _valueCase,
        _walletCase,
        _categoryCase,
        _dateParcelCase,
        _tagCase,
        _textArea,
        _button,
      ],
    });

    const _nav = Nav.build();

    const _container = Container.build({
      children: [_nav, _costBox, _footer],
    });

    return _container;
  },
};

export default CostNext;
