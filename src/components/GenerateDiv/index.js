import Element from "../element/index.js";

const GenerateDiv = {
  build: (props) => {
    const _div = Element({
      typeElement: "div",
      classList: props.classList,
      children: props.children,
      innerHTML: props.innerHTML,
    });

    return _div;
  },
};

export default GenerateDiv;
