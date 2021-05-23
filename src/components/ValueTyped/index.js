import Input from "../shared/Input/index.js";

const ValueTyped = {
  build: (props) => {
    const _valueTyped = Input.build({
      classList: props.classList,
      attribute: props.attribute,
    });
    return _valueTyped;
  },
};

export default ValueTyped;
