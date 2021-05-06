import Element from "../element/index.js";

const CaseProgress = {
  build: (element) => {

    const _caseProgress = Element({
      typeElement: "div",
      classList: ["wallet-case", "margin-button"],
      children: element
    });

    return _caseProgress
  },
};

export default CaseProgress;
