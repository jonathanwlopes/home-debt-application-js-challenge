import Images from "../assets/img/index.js";
import Element from "../element/index.js";

const footer = {
  build: () => {
    const _iStore = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.store,
    });

    const _iCredit = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.credit,
    });
    const _circle = Element({
      typeElement: "div",
      classList: ["home-circle"],
    });

    const _iStatement = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.statement,
    });

    const _iHome = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.home,
    });

    const _footerBox = Element({
      typeElement: "div",
      classList: ["footer-box"],
      children: [_iHome, _iStatement, _circle, _iCredit, _iStore],
    });

    return _footerBox;
  },
};

export default footer;
