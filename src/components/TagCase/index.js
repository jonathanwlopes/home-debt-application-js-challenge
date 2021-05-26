import printTag from "../../modules/printTag/index.js";
import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const TagCase = {
  build: () => {
    const listTag = [];

    const _titleConfirm = Title.build({
      classList: ["title-small"],
      textContent: "Confirmar",
    });

    const _confirm = Element({
      typeElement: "div",
      classList: ["add-tag", "inactive"],
      attribute: {
        id: "confirm",
      },
      children: [_titleConfirm],
    });

    const _iconTagAdd = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.plus,
    });
    const _titleAdd = Title.build({
      classList: ["title-small"],
      textContent: "Adicionar",
    });

    const _addTag = Element({
      typeElement: "div",
      classList: ["add-tag"],
      children: [_titleAdd, _iconTagAdd],
    });

    const _insertTag = Element({
      typeElement: "input",
      classList: ["input-insert-tag", "inactive"],
      attribute: {
        maxlength: 5,
      },
    });

    const _joinTags = Element({
      typeElement: "div",
      classList: ["join-tag"],
      children: [_insertTag],
    });

    const _tagCase = Element({
      typeElement: "div",
      classList: ["tags-box"],
      children: [_joinTags, _addTag, _confirm],
    });

    _addTag.addEventListener("click", () => {
      _confirm.classList.toggle("inactive");
      _addTag.classList.toggle("inactive");
      _insertTag.classList.toggle("inactive");
      _joinTags.textContent = "";
      _insertTag.value = "";
      _joinTags.appendChild(_insertTag);
    });

    _confirm.addEventListener("click", () => {
      const $insertTag = document.querySelector(".input-insert-tag");

      if (listTag.length < 3) {
        if ($insertTag.value !== "") {
          listTag.push($insertTag.value);
        }
      }

      _insertTag.classList.toggle("inactive");
      _confirm.classList.toggle("inactive");
      _addTag.classList.toggle("inactive");

      printTag(listTag);
    });

    return _tagCase;
  },
};

export default TagCase;
