import Title from "../Title/index.js";

const ValueTyped = {
  build: (props) => {
    const _valueTyped = Title.build({
      textContent: props.textContent,
      classList: props.classList,
      attribute: props.attribute,
    });

    return _valueTyped;
  },
};

export default ValueTyped;
