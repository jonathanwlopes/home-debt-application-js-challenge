import Element from "../element/index.js";

const TitleCurrency = {
  build: (props) => {
    const _titleCurrency = Element({
      typeElement: "span",
      classList: ["text-currency"],
      textContent: props.textContent,
    });

    return _titleCurrency;
  },

};

export default TitleCurrency;
