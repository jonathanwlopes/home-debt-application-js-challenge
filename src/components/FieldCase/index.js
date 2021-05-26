import Element from "../element/index.js";
import Title from "../Title/index.js";
import ValueTyped from "../ValueTyped/index.js";

const FieldCase = {
  build: (props) => {
    const _valueTyped = ValueTyped.build({
      classList: ["typed-case"],
      textContent: `R$ ${props.textContent}`,
      attribute: {
        id: "typed",
      },
    });



    const _joinCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_valueTyped],
    });

    const _close = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    _close.addEventListener("click", () => {
      window.open(
        "http://127.0.0.1:5500/src/pages-dinamic/cost/index.html",
        "_top"
      );
    });

    const _valueCase = Element({
      typeElement: "div",
      classList: ["typed-case"],
      children: [_close, _joinCurrency],
    });

    return _valueCase;
  },
};

export default FieldCase;
