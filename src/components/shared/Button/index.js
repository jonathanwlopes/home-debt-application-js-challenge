import Element from "../../element/index.js";

const Button = {
  build: (props) => {
    const _button = Element({
      typeElement: "button",
      classList: props.classList,
      textContent: props.textContent,
      innerHTML: props.innerHTML
    });

    return _button;
  },
};

export default Button;
