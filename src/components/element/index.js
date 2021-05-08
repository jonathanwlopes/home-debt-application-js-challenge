import ElementTest from "../../utils/elementTest/index.js";

const Element = (props) => {
  if (ElementTest(props) != true) {
    console.error("Check log: ElementTest");
    return false;
  }

  const _element = document.createElement(props.typeElement);

  if (props.classList) _element.classList.add(...props.classList);

  if (props.children) _element.append(...props.children);

  if (props.attribute) {
    _element.setAttribute(props.attribute.frist[0], props.attribute.frist[1]);
    _element.setAttribute(props.attribute.second[0], props.attribute.second[1]);
  }

  if (props.textContent) _element.textContent = props.textContent;

  if (props.src) _element.src = props.src;

  if (props.innerHTML) _element.innerHTML = props.innerHTML;

  return _element;
};

export default Element;
