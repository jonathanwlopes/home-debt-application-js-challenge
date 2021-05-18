import Images from "../../../components/assets/img/index.js";
import Container from "../../../components/Container/index.js";
import Element from "../../../components/element/index.js";
import Keyboard from "../../../components/Keyboard/index.js";
import Title from "../../../components/Title/index.js";
import Links from "../../../utils/import/css/data/index.js";
import Styles from "../../../utils/import/css/index.js";

const GoalModal = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

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
    const _fieldCase = Element({
      typeElement: "div",
      classList: ["field-case", "field-case-background"],
      children: [_titleField],
    });

    const _inputDate = Element({
      typeElement: "input",
      classList: ["input-default"],
      attribute: {
        type: "data",
        placeholder: "14/05/2021",
      },
    });
    const _title = Title.build({
      classList: ["title-middle"],
      textContent: "Final da Meta",
    });
    const _joinEndGoal = Element({
      typeElement: "div",
      classList: ["wrapper-end-goal"],
      children: [_title, _inputDate],
    });

    const _inputGoal = Element({
      typeElement: "input",
      classList: ["input-default", "width-big"],
      attribute: {
        type: "text",
        placeholder: "Nome da Meta",
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

    const _joinText = Element({
      typeElement: "div",
      classList: ["join-text"],
      children: [_walletTitle, _walletSubTitle],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = Element({
      typeElement: "div",
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinCircleText = Element({
      typeElement: "div",
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    const _walletCase = Element({
      typeElement: "div",
      classList: ["wallet-case", "blue"],
      children: [_joinCircleText, _addCategory],
    });

    const _modalBox = Element({
      typeElement: "div",
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
