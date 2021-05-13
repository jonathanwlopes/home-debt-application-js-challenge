import Images from "../../components/assets/img/index.js";
import CategoryCase from "../../components/CategoryCase/index.js";

import Container from "../../components/Container/index.js";
import CostBox from "../../components/CostBox/index.js";
import DateParcelBox from "../../components/DateParcelBox/index.js";
import Element from "../../components/element/index.js";
import FieldCase from "../../components/FieldCase/index.js";
import Footer from "../../components/Footer/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Nav from "../../components/Nav/index.js";
import Title from "../../components/Title/index.js";
import WalletCase from "../../components/WalletCase/index.js";
import Links from "../../utils/import/css/data/index.js";
import Styles from "../../utils/import/css/index.js";

const CostNext = {
  build: () => {
    Styles({
      value: [
        Links.global,
        Links.container,
        Links.footer,
        Links.costBox,
        Links.nav,
        Links.fieldCase,
        Links.dateParcelBox,
        Links.joinDate,
        Links.joinParcel,
        Links.tagsBox,
        Links.joinTag,
        Links.tagContent,
        Links.addTag,
        Links.walletBox,
        Links.walletCase,
        Links.shared.text,
        Links.shared.icon,
        Links.shared.circle,
        Links.shared.progressBar,
        Links.shared.button,
        Links.shared.close,
        Links.shared.colors,
        Links.shared.tick,
        Links.shared.input,
        Links.shared.textArea,
      ],
    });

    const _footer = Footer.build();

    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: "Concluir",
    });
    const _textArea = Element({
      typeElement: "textarea",
      classList: ["text-area"],
      attribute: {
        frist: ["placeholder", "Obs"],
        second: [], // BUG FIX
      },
    });
    const _iconTagAdd = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.plus,
    });
    const _titleAdd = Title.build({
      classList: ["title-small"],
      textContent: "Adicionar",
    });
    const _addTag = GenerateDiv.build({
      classList: ["add-tag"],
      children: [_titleAdd, _iconTagAdd],
    });

    const _tagSubTitle = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    const _tagTitle = Title.build({
      classList: ["title-small"],
      textContent: "Tag",
    });

    const _tagContent = GenerateDiv.build({
      classList: ["tag-content"],
      children: [_tagTitle, _tagSubTitle],
    });

    const _joinTags = GenerateDiv.build({
      classList: ["join-tag"],
      children: [_tagContent],
    });
    const _tagsBox = GenerateDiv.build({
      classList: ["tags-box"],
      children: [_joinTags, _addTag],
    });

    const _dateParcelBox = DateParcelBox.build()

    const _categoryCase = CategoryCase.build()

    const _walletCase = WalletCase.build({
      classList: ["wallet-case", "blue"],
    });

    const _fieldCase = FieldCase.build();

    const _costBox = CostBox.build({
      children: [
        _fieldCase,
        _walletCase,
        _categoryCase,
        _dateParcelBox,
        _tagsBox,
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
