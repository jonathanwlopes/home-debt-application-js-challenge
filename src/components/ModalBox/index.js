import Element from "../element/index.js";

const ModalBox = {
  build: (props) => {
    const _modalBox = Element({
      typeElement: "div",
      classList: ["modal-box"],
      children: props.children,
    });

    return _modalBox;
  },
};

export default ModalBox;
