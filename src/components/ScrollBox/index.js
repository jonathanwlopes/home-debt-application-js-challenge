import Element from "../element/index.js";

const ScrollBox = {
  build: (props) => {
    const _scrollBox = Element({
      typeElement: "div",
      classList: ["scroll-box"],
      children: props.children,
    });

    return _scrollBox;
  },
};

export default ScrollBox;
