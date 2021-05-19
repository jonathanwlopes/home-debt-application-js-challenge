import printTyped from "../../utils/printTyped/index.js";
import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Button from "../shared/Button/index.js";

const Keyboard = {
  build: () => {
    const typedList = [];

    const _btn0 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "0",
    });

    const _btn9 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "9",
    });

    const _btn8 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "8",
    });

    const _btn7 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "7",
    });

    const _btn6 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "6",
    });

    const _btn5 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "5",
    });

    const _btn4 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "4",
    });

    const _btn3 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "3",
    });

    const _btn2 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "2",
    });

    const _btn1 = Button.build({
      classList: ["keyboard-button"],
      innerHTML: "1",
    });

    const _IconDelete = Element({
      typeElement: "img",
      classList: ["keyboard-icon-prop"],
      src: Images.delete,
    });

    _IconDelete.addEventListener("click", () => {
      typedList.splice(0, typedList.length);

      printTyped({ remove: typedList });
    });

    const _keyboard = Element({
      typeElement: "div",
      classList: ["keyboard"],
      children: [
        _btn1,
        _btn2,
        _btn3,
        _btn4,
        _btn5,
        _btn6,
        _btn7,
        _btn8,
        _btn9,
        _btn0,
        _IconDelete,
      ],
    });

    const keyboardListener = [
      _btn1,
      _btn2,
      _btn3,
      _btn4,
      _btn5,
      _btn6,
      _btn7,
      _btn8,
      _btn9,
    ];

    keyboardListener.forEach((keyboard, index) => {
      keyboard.addEventListener("click", () => {
        typedList.push(index + 1);
        printTyped(typedList);
      });
    });

    _btn0.addEventListener("click", () => {
      typedList.push(0);
      printTyped(typedList);
    });

    return _keyboard;
  },
};

export default Keyboard;
