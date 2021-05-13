import Images from "../../../components/assets/img/index.js";
import StylesLink from "../../../components/assets/Styles/index.js";
import Container from "../../../components/Container/index.js";
import Element from "../../../components/element/index.js";
import GenerateDiv from "../../../components/GenerateDiv/index.js";
import Keyboard from "../../../components/Keyboard/index.js";
import Title from "../../../components/Title/index.js";
import importStyles from "../../../utils/import/css/index.js";

const GoalModal = {
  build: () => {
    importStyles({
      value: [
        StylesLink.global,
        StylesLink.container,
        StylesLink.modalBox,
        StylesLink.walletBox,
        StylesLink.walletCase,
        StylesLink.fieldCaseGoal,
        StylesLink.endOfGoal,
        StylesLink.keyboardButton,
        StylesLink.keyboard,
        StylesLink.shared.circle,
        StylesLink.shared.icon,
        StylesLink.shared.text,
        StylesLink.shared.input,
        StylesLink.shared.button,
        StylesLink.shared.colors,
      ],
    });

    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: "Criar Meta",
    });

    const _keyboard = Keyboard.build();

    const _titleField = Title.build({
      classList: ["title-middle"],
      textContent: "R$ 100,00",
    });
    const _fieldCase = GenerateDiv.build({
      classList: ["field-case"],
      children: [_titleField],
    });

    const _inputDate = Element({
      typeElement: "input",
      classList: ["input-default"],
      attribute: {
        frist: ["type", "data"],
        second: ["placeholder", "14/05/2021"],
      },
    });
    const _title = Title.build({
      classList: ["title-middle"],
      textContent: "Final da Meta",
    });
    const _joinEndGoal = GenerateDiv.build({
      classList: ["wrapper-end-goal"],
      children: [_title, _inputDate],
    });

    const _inputGoal = Element({
      typeElement: "input",
      classList: ["input-default", "width-big"],
      attribute: {
        frist: ["placeholder", "Nome da Meta"],
        second: ["type", "text"],
      },
    });

    const _addCategory = Element({
      typeElement: "img",
      classList: ["icon", "icon-margin-right", "icon-effect"],
      src: Images.add,
    });

    const _walletSubTitle = Title.build({
      classList: ["title-small"],
      textContent: "nome",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Categoria",
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
      children: [_joinCircleText, _addCategory],
    });

    const _modalBox = GenerateDiv.build({
      classList: ["modal-box"],
      children: [
        _walletCase,
        _inputGoal,
        _joinEndGoal,
        _fieldCase,
        _keyboard,
        _button,
      ],
    });

    const _container = Container.build({
      children: [_modalBox],
    });

    return _container;
  },
};

export default GoalModal;
