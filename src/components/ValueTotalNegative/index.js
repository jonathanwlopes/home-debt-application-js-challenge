import Element from "../element/index.js";
import Title from "../Title/index.js";

const ValueTotalNegative = {
  build: () => {
    const _subAmount = Title.build({
      textContent: "100.000,00",
      classList: ["text-amount", "negative-color"],
    });

    const _titleCurrency = Title.build({
      classList: ["text-currency", "negative-color", "bold"],
      textContent: "R$",
    });

    const _valueTotalNegative = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleCurrency, _subAmount],
    });

    return _valueTotalNegative;
  },
};

export default ValueTotalNegative;
