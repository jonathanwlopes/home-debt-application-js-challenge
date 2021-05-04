const ElementTest = (props) => {
  if (!props) {
    console.error("Element error: props is required!");
    return false;
  }

  if (typeof props != "object") {
    console.error("Element error: props object required!");
    return false;
  }

  if (!props.typeElement) {
    console.error("Element error: props.typeElement required!");
    return false;
  }

  if (typeof props.classList != "object") {
    console.error("Element error: props.classList object required!");
    return false;
  }

  if (props.children && typeof props.children != "object") {
    console.error("Element error: props.children object required!");
    return false;
  }

  return true;
};

export default ElementTest;
