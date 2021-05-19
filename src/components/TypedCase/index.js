import Element from "../element/index.js";
import Input from "../shared/Input/index.js";
import Title from "../Title/index.js";

const TypedCase = {
  build: () => {
    const _valueTyped = Input.build({
      classList: ["value-typed"],
      attribute: {
        id: "value-typed",
        placeholder: "Digite o valor",
      },
    });

    const _typedCase = Element({
      typeElement: "div",
      classList: ["typed-case", "typed-case-background"],
      children: [_valueTyped],
    });

    return _typedCase;
  },
};

export default TypedCase;
