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
    const keysList = Object.keys(props.attribute);

    keysList.forEach((key) => _element.setAttribute(key, props.attribute[key]));
  }

  if (props.textContent) _element.textContent = props.textContent;

  if (props.src) _element.src = props.src;

  if (props.innerHTML) _element.innerHTML = props.innerHTML;

  return _element;
};

export default Element;
