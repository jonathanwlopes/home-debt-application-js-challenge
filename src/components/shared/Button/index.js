import Element from "../../element/index.js";

const Button = {
  build: (props) => {
    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: props.textContent,
    });

    return _button;
  },
};

export default Button;
