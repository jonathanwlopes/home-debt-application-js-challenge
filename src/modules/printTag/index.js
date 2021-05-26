import Element from "../../components/element/index.js";
import Title from "../../components/Title/index.js";

const printTag = (props) => {
  const $joinTag = document.querySelector(".join-tag");

  props.forEach((tag) => {
    const _tagClose = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    const _tag = Title.build({
      classList: ["title-small"],
      textContent: tag,
      attribute: {
        id: "id-tag",
      },
    });

    const _tagContent = Element({
      typeElement: "div",
      classList: ["tag-content"],
      children: [_tag, _tagClose],
    });

    $joinTag.appendChild(_tagContent);
  });
};

export default printTag;
