const printTyped = (props) => {
  const $valueTyped = document.querySelector("#value-typed");

  props.remove
    ? ($valueTyped.value = "Digite um valor")
    : ($valueTyped.value = props.join(""));
};

export default printTyped;
