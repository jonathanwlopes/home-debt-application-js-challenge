import Element from "../../element/index.js";

const walletBox = {
  build: (element) => {
    const walletBox = Element({
      typeElement: "div",
      classList: ["wallet-box"],
      children: element
    });

    return walletBox;
  },
};

export default walletBox;
