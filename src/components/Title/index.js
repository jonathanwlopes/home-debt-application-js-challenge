import Element from "../element/index.js";

const Title = {
  build: (props) => {
    const _title = Element({
      typeElement: "span",
      classList: props.classList,
      textContent: props.textContent,
    });

    return _title;
  },
};

export default Title;
