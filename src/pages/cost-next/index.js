import Images from "../../components/assets/img/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import Footer from "../../components/Footer/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Nav from "../../components/Nav/index.js";
import Title from "../../components/Title/index.js";
import importStyles from "../../utils/import/css/index.js";

const CostNext = {
  build: () => {
    const $root = document.querySelector("#root");

    importStyles({
      value: [
        StylesLink.global,
        StylesLink.container,
        StylesLink.footer,
        StylesLink.costBox,
        StylesLink.nav,
        StylesLink.fieldCase,
        StylesLink.dateParcelBox,
        StylesLink.joinDate,
        StylesLink.joinParcel,
        StylesLink.tagsBox,
        StylesLink.joinTag,
        StylesLink.tagContent,
        StylesLink.addTag,
        StylesLink.walletBox,
        StylesLink.walletCase,
        StylesLink.shared.text,
        StylesLink.shared.icon,
        StylesLink.shared.circle,
        StylesLink.shared.progressBar,
        StylesLink.shared.button,
        StylesLink.shared.close,
        StylesLink.shared.colors,
        StylesLink.shared.tick,
        StylesLink.shared.input,
        StylesLink.shared.textArea,
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

    const _title3 = Title.build({
      classList: ["title-small"],
      textContent: "Valor",
    });

    const _title2 = Title.build({
      classList: ["title-small"],
      textContent: "Dividir",
    });

    const _joinText3 = GenerateDiv.build({
      classList: ["join-text"],
      children: [_title2, _title3],
    });

    const _tickOk = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.tick,
    });

    const _tick = GenerateDiv.build({
      classList: ["tick"],
      children: [_tickOk],
    });

    const _input2 = Element({
      typeElement: "input",
      classList: ["input-default"],
      attribute: {
        frist: ["type", "text"],
        second: ["placeholder", "1 Vez"],
      },
    });

    const _wapperParcel = GenerateDiv.build({
      classList: ["wrapper-parcel"],
      children: [_input2, _tick, _joinText3],
    });

    const _titleParcel = Title.build({
      classList: ["title-big", "bold"],
      textContent: "Parcelas",
    });

    const _joinParcel = GenerateDiv.build({
      classList: ["join-parcel"],
      children: [_titleParcel, _wapperParcel],
    });

    const _input = Element({
      typeElement: "input",
      classList: ["input-default"],
      attribute: {
        frist: ["type", "date"],
        second: ["a", "b"], // BUG FIX
      },
    });

    const _titleDate = Title.build({
      classList: ["title-big", "bold"],
      textContent: "Data",
    });

    const _joinDate = GenerateDiv.build({
      classList: ["join-date"],
      children: [_titleDate, _input],
    });

    const _dateParcelBox = GenerateDiv.build({
      classList: ["date-parcel-box"],
      children: [_joinDate, _joinParcel],
    });

    const _addCategory = Element({
      typeElement: "img",
      classList: ["icon", "icon-margin-right", "icon-effect"],
      src: Images.add,
    });

    const _walletSubTitle2 = Title.build({
      classList: ["title-small"],
      textContent: "nome",
    });

    const _walletTitle2 = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Categoria",
    });

    const _joinText2 = GenerateDiv.build({
      classList: ["join-text"],
      children: [_walletTitle2, _walletSubTitle2],
    });

    const _iWallet2 = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle2 = GenerateDiv.build({
      classList: ["default-circle"],
      children: [_iWallet2],
    });

    const _joinCircleText2 = GenerateDiv.build({
      classList: ["join-icon-text"],
      children: [_circle2, _joinText2],
    });

    const _walletCase2 = GenerateDiv.build({
      classList: ["wallet-case", "blue"],
      children: [_joinCircleText2, _addCategory],
    });

    const _amountSmallCurrency = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleSmallCurrency = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinSmallCurrency = GenerateDiv.build({
      classList: ["join-currency"],
      children: [_titleSmallCurrency, _amountSmallCurrency],
    });

    const _walletSubTitle = Title.build({
      classList: ["title-small"],
      textContent: "nome",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Carteira",
    });

    const _joinText = GenerateDiv.build({
      classList: ["join-text"],
      children: [_walletTitle, _walletSubTitle],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = GenerateDiv.build({
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinCircleText = GenerateDiv.build({
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    const _walletCase = GenerateDiv.build({
      classList: ["wallet-case", "blue"],
      children: [_joinCircleText, _joinSmallCurrency],
    });

    const _amountCurrency = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleCurrency = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinCurrency = GenerateDiv.build({
      classList: ["join-currency"],
      children: [_titleCurrency, _amountCurrency],
    });

    const _close = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    const _fieldCase = GenerateDiv.build({
      classList: ["field-case"],
      children: [_close, _joinCurrency],
    });
    const _costBox = GenerateDiv.build({
      classList: ["cost-box"],
      children: [
        _fieldCase,
        _walletCase,
        _walletCase2,
        _dateParcelBox,
        _tagsBox,
        _textArea,
        _button,
      ],
    });

    const _nav = Nav.build();

    const _container = GenerateDiv.build({
      classList: ["container"],
      children: [_nav, _costBox, _footer],
    });

    $root.appendChild(_container);

    return _container;
  },
};

export default CostNext;
