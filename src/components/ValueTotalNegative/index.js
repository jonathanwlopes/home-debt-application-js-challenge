import Element from "../element/index.js";
import TypedCase from "../TypedCase/index.js";
import ValueTyped from "../ValueTyped/index.js";

const ValueTotalNegative = {
  build: () => {
    const _valueTyped = ValueTyped.build({
      classList: ["value-typed", "negative-color", "bold"],
      attribute: {
        id: "value-typed",
        placeholder: "Digite o valor",
      },
    });

    const _typedCase = TypedCase.build({
      classList: ["typed-case", "typed-case-background"],
      children: [_valueTyped],
    });

    const _valueTotalNegative = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_typedCase],
    });

    return _valueTotalNegative;
  },
};

export default ValueTotalNegative;
