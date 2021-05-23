const printTyped = (props) => {
  const $valueTyped = document.querySelector("#value-typed");

  props.remove
    ? ($valueTyped.value = "")
    : ($valueTyped.value = Number(props.join("")).toLocaleString(
        "pt-br",
        { style: "currency", currency: "BRL" },
        { minimumFractionDigits: 2 }
      ));
};

export default printTyped;
