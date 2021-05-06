import Element from "../../element/index.js";

const walletCase = {
  build: (element) => {
    const _walletCase = Element({
      typeElement: "div",
      classList: ["wallet-case"],
      children: element,
    });

    return _walletCase;
  },
};

export default walletCase;
