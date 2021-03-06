import Element from "../../components/element/index.js";

const generateMenu = (props) => {
  const _link = Element({
    typeElement: "a",
    classList: ["link"],
    attribute: {
      href: "#",
    },
    textContent: props.textContent,
  });

  const _li = Element({
    typeElement: "li",
    classList: props.classList,
    children: [_link],
  });

  props.parent.appendChild(_li);
};

export default generateMenu;
