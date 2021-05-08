import Element from "../../components/element/index.js";

const GenerateDiv = {
  build: (props) => {
    const _div = Element({
      typeElement: "div",
      classList: props.classList,
      children: props.children,
    });

    return _div;
  },
};

export default GenerateDiv;
