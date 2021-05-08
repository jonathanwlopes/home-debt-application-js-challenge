import generateMenu from "../../utils/generateMenu/index.js";
import Element from "../element/index.js";

const Nav = {
  build: () => {
    const _ul = Element({
      typeElement: "ul",
      classList: ["nav-list"],
    });
    
    generateMenu({
      parent: _ul,
      classList: ["income", "align-links"],
      textContent: "Receita",
    });
    generateMenu({
      parent: _ul,
      classList: ["cost", "select", "align-links"],
      textContent: "Despesa",
    });
    generateMenu({
      parent: _ul,
      classList: ["transfer", "align-links"],
      textContent: "Transferência",
    });

    const _container = Element({
      typeElement: "div",
      classList: ["nav-container"],
      children: [_ul],
    });

    const _nav = Element({
      typeElement: "nav",
      classList: ["nav-bar"],
      children: [_container],
    });
    return _nav;
  },
};

export default Nav;
