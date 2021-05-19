import Element from "../element/index.js";
import Title from "../Title/index.js";

const FieldCase = {
  build: () => {
    const _amountCurrency = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleCurrency = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleCurrency, _amountCurrency],
    });

    const _close = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    const _fieldCase = Element({
      typeElement: "div",
      classList: ["typed-case"],
      children: [_close, _joinCurrency],
    });

    return _fieldCase;
  },
};

export default FieldCase;
