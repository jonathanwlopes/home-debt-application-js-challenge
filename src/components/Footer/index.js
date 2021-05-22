import Images from "../assets/img/index.js";
import Element from "../element/index.js";

const Footer = {
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

    _iCredit.addEventListener("click", () => {
      window.open(
        "http://127.0.0.1:5500/src/pages-dinamic/cost/index.html",
        "_top"
      );
    });

    const _circle = Element({
      typeElement: "div",
      classList: ["home-circle"],
    });

    _circle.addEventListener("click", () => {
      window.open(
        "http://127.0.0.1:5500/src/pages-dinamic/home/index.html",
        "_top"
      );
    });

    const _iStatement = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.statement,
    });

    _iStatement.addEventListener("click", () => {
      window.open(
        "http://127.0.0.1:5500/src/pages-dinamic/bills/index.html",
        "_top"
      );
    });

    const _iHome = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.home,
      attribute: {
        target: "_blank",
      },
    });

    _iHome.addEventListener("click", () => {
      window.open(
        "http://127.0.0.1:5500/src/pages-dinamic/home/index.html",
        "_top"
      );
    });

    const _footerBox = Element({
      typeElement: "div",
      classList: ["footer-box"],
      children: [_iHome, _iStatement, _circle, _iCredit, _iStore],
    });

    return _footerBox;
  },
};

export default Footer;
