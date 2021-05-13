import Element from "../element/index.js";

const AmountBox = {
  build: (props) => {
    const _amountBox = Element({
      typeElement: "div",
      classList: props.classList,
      children: props.children,
    });

    return _amountBox;
  },
};

export default AmountBox;
