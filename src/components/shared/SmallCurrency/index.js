import Element from "../../element/index.js";
import Title from "../../Title/index.js";

const SmallCurrency = {
  build: (props) => {
    const _amountSmallCurrency = Title.build({
      classList: ["text-amount"],
      textContent: props.value,
    });

    const _titleSmallCurrency = Title.build({
      classList: ["text-currency"],
      textContent: props.currency,
    });

    const _smallCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleSmallCurrency, _amountSmallCurrency],
    });

    return _smallCurrency;
  },
};

export default SmallCurrency;
