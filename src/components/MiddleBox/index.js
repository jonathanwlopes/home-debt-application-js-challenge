import Element from "../element/index.js";

const MiddleBox = {
  build: (props) => {
    const _middleBox = Element({
      typeElement: "div",
      classList: ["middle-box"],
      children: props.children,
    });

    return _middleBox;
  },
};

export default MiddleBox;
