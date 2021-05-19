import CategoryCase from "../../../components/CategoryCase/index.js";
import db_Bills from "../../../components/data/index.js";
import EndGoalCase from "../../../components/EndGoalCase/index.js";
import Keyboard from "../../../components/Keyboard/index.js";
import ModalBox from "../../../components/ModalBox/index.js";
import Button from "../../../components/shared/Button/index.js";
import Input from "../../../components/shared/Input/index.js";
import TypedCase from "../../../components/TypedCase/index.js";
import printGoal from "../../../modules/printGoal/index.js";
import generateId from "../../../utils/generateID/index.js";
import Links from "../../../utils/import/css/data/index.js";
import Styles from "../../../utils/import/css/index.js";

const GoalModal = {
  build: () => {
    Styles({ value: [Links.global, Links.styles] });

    const _button = Button.build({
      classList: ["default-button"],
      textContent: "Criar Meta",
    });

    _button.addEventListener("click", () => {
      const $nameGoal = document.querySelector("#name-goal");
      const $dateGoal = document.querySelector("#date-goal");
      const $valueTyped = document.querySelector("#value-typed");
      const $scrollBox = document.querySelector(".scroll-box");
      const $modalBox = document.querySelector(".modal-box");

      const nameGoal = $nameGoal.value;
      const dateGoal = $dateGoal.value;
      const valueTyped = Number($valueTyped.value);

      db_Bills.createGoal(2, {
        _id: generateId(),
        name: nameGoal,
        totalValue: valueTyped,
        amountValue: 0,
        date: dateGoal,
      });

      printGoal(2);

      $scrollBox.classList.remove("inactive");
      $modalBox.remove();
    });

    const _keyboard = Keyboard.build();

    const _typedCase = TypedCase.build();

    const _endGoalCase = EndGoalCase.build();

    const _inputGoal = Input.build({
      classList: ["input-default", "width-big"],
      attribute: {
        type: "text",
        placeholder: "Nome da Meta",
        id: "name-goal",
      },
    });

    const _categoryCase = CategoryCase.build();

    const _modalBox = ModalBox.build({
      children: [
        _categoryCase,
        _inputGoal,
        _endGoalCase,
        _typedCase,
        _keyboard,
        _button,
      ],
    });

    return _modalBox;
  },
};

export default GoalModal;
