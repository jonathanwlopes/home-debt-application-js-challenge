import Element from "../element/index.js";
import walletBox from "../Wallet/WalletBox/index.js";

const scrollBox = {
  build: () => {

    const _walletBox2 = walletBox.build()
    const _walletBox = walletBox.build()

    const _scrollBox = Element({
      typeElement: "div",
      classList: ["scroll-box"],
      children: [_walletBox,_walletBox2]
    });

  

    return _scrollBox
  },
};

export default scrollBox;
