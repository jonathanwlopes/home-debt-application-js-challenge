import Element from "../element/index.js";
import TypedCase from "../TypedCase/index.js";
import ValueTyped from "../ValueTyped/index.js";

const ValueTotalNegative = {
  build: () => {

    const _valueTyped = ValueTyped.build({
      classList: ["value-typed", "negative-color", "bold"],
      textContent: "Digite o valor",
      attribute: {
        id: "value-typed",

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
