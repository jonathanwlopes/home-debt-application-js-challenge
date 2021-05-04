import ElementTest from "../../utils/elementTest/index.js";

const Element = (props) => {
  if (ElementTest(props) != true) {
    console.error("Check log: ElementTest");
    return false;
  }

  const _element = document.createElement(props.typeElement);

  _element.classList.add(...props.classList);

  if (props.children) _element.append(...props.children);

  return _element;
};

export default Element;
