import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import GenerateDiv from "../GenerateDiv/index.js";

const Keyboard = {
  build: () => {
    const _btn0 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "0",
    });

    const _btn9 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "9",
    });
    const _btn8 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "8",
    });
    const _btn7 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "7",
    });
    const _btn6 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "6",
    });
    const _btn5 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "5",
    });
    const _btn4 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "4",
    });
    const _btn3 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "3",
    });
    const _btn2 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "2",
    });
    const _btn1 = GenerateDiv.build({
      classList: ["keyboard-button"],
      innerHTML: "1",
    });
    const _IconDelete = Element({
      typeElement: "img",
      classList: ["keyboard-icon-prop"],
      src: Images.delete,
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

    return _keyboard;
  },
};

export default Keyboard;
