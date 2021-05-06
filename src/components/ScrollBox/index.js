import Images from "../assets/img/index.js";
import Element from "../element/index.js";

const ScrollBox = {
  build: (element) => {
    const _scrollBox = Element({
      typeElement: "div",
      classList: ["scroll-box"],
      children: element,
    });
    return _scrollBox;
  },
};

export default ScrollBox;
