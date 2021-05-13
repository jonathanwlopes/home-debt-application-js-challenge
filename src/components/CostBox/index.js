import Element from "../element/index.js";

const CostBox = {
  build: (props) => {
    const _costBox = Element({
      typeElement: "div",
      classList: ["cost-box"],
      children: props.children,
    });

    return _costBox
  },
};

export default CostBox;
