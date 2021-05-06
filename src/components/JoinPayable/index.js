import Element from "../element/index.js";

const JoinPayable = {
  build: (props) => {
    const _subTitle = Element({
      typeElement: "span",
      classList: ["title-small"],
      textContent: props.subTitle,
    });

    const _title = Element({
      typeElement: "span",
      classList: ['title-middle', 'bold'],
      textContent: props.title,
    });

    const _joinPayable = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_title, _subTitle],
    });

    return _joinPayable;
  },
};

export default JoinPayable;
