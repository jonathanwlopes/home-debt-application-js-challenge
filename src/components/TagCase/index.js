import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const TagCase = {
  build: () => {
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

    const _tagSubTitle = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    const _tagTitle = Title.build({
      classList: ["title-small"],
      textContent: "Tag",
    });

    const _tagContent = Element({
      typeElement: "div",
      classList: ["tag-content"],
      children: [_tagTitle, _tagSubTitle],
    });

    const _joinTags = Element({
      typeElement: "div",
      classList: ["join-tag"],
      children: [_tagContent],
    });

    const _tagCase = Element({
      typeElement: "div",
      classList: ["tags-box"],
      children: [_joinTags, _addTag],
    });

    return _tagCase;
  },
};

export default TagCase;
