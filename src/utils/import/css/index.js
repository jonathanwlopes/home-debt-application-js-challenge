import Element from "../../../components/element/index.js";

const Styles = (href) => {
  const { value } = href;

  const $head = document.querySelector("head");

  for (let i = 0; i < Object.keys(value).length; i++) {
    const newStyles = Element({
      typeElement: "link",
      attribute: {
        frist: ["rel", "stylesheet"],
        second: ["href", value[i]],
      },
    });

    $head.appendChild(newStyles);
  }
};

export default Styles;
