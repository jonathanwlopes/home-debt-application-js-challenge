import Element from "../element/index.js";
import Input from "../shared/Input/index.js";
import Title from "../Title/index.js";

const EndGoalCase = {
  build: () => {
    const _inputDate = Input.build({
      classList: ["input-default"],
      attribute: {
        type: "date",
        id: "date-goal",
      },
    });

    const _title = Title.build({
      classList: ["title-middle"],
      textContent: "Final da Meta",
    });
    const _EndGoalCase = Element({
      typeElement: "div",
      classList: ["wrapper-end-goal"],
      children: [_title, _inputDate],
    });

    return _EndGoalCase;
  },
};

export default EndGoalCase;
