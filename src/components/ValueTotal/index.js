import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const ValueTotal = {
  build: (props) => {

    const _iconWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.totalWallet,
    });

    const _titleValue = Title.build({
      classList: ["text-amount"],
      textContent: props.totalValue
    });

    const _titleCurrency = Title.build({
      classList: ["text-currency"],
      textContent: props.currency
    });

    const _valueTotal = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleCurrency, _titleValue, _iconWallet],
    });

    return _valueTotal;
  },
};

export default ValueTotal;
