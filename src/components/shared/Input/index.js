import Element from "../../element/index.js";

const Input = {
  build: (props) => {
    const _input = Element({
      typeElement: "input",
      classList: props.classList,
      attribute: props.attribute,
    });
    return _input;
  },
};

export default Input;
