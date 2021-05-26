const printTyped = (props) => {
  const $valueTyped = document.querySelector("#value-typed");

  props.remove
    ? ($valueTyped.textContent = "")
    : ($valueTyped.textContent = Number(props.join("")).toLocaleString(
        "pt-br",
        { minimumFractionDigits: 2 }
      ));
};

export default printTyped;
