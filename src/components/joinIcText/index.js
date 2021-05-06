import Images from "../assets/img/index.js";
import Element from "../element/index.js";

const JoinIcText = {
  build: (props) => {
    const _subTitle = Element({
      typeElement: "span",
      classList: ["sub-title-middle"],
      textContent: props.subTitle,
    });

    const _title = Element({
      typeElement: "span",
      classList: ["title-middle", "bold"],
      textContent: props.title,
    });

    const _joinText = Element({
      typeElement: "div",
      classList: ["join-text"],
      children: [_title, _subTitle],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = Element({
      typeElement: "div",
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinIcText = Element({
      typeElement: "div",
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    return _joinIcText;
  },
};

export default JoinIcText;
