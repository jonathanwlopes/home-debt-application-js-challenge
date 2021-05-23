import Element from "../element/index.js";

const TypedCase = {
  build: (props) => {
    const _typedCase = Element({
      typeElement: "div",
      classList: props.classList,
      children: props.children,
    });

    return _typedCase;
  },
};

export default TypedCase;
