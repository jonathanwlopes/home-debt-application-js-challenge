import CategoryCase from "../../components/CategoryCase/index.js";
import Container from "../../components/Container/index.js";
import CostBox from "../../components/CostBox/index.js";
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
      textContent: "Concluir",
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
    });

    const _fieldCase = FieldCase.build();

    const _costBox = CostBox.build({
      children: [
        _fieldCase,
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
