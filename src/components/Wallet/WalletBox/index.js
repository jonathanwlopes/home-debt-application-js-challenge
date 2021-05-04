import Element from "../../element/index.js";

const walletBox = {
  build: () => {
    const walletBox = Element({
      typeElement: "div",
      classList: ["wallet-box"],
    });

    return walletBox
  },
};

export default walletBox;
