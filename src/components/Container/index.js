import Element from "../element/index.js";

const Container = {
  build: (props) => {
    const $root = document.querySelector("#root");

    const _container = Element({
      typeElement: "section",
      classList: ["container"],
      children: props.children,
    });

    $root.appendChild(_container);
  },
};

export default Container;
