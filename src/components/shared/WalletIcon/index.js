import Images from "../../assets/img/index.js";
import Element from "../../element/index.js";

const WalletIcon = {
  build: () => {
    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _walletIcon = Element({
      typeElement: "div",
      classList: ["default-circle"],
      children: [_iWallet],
    });

    return _walletIcon;
  },
};

export default WalletIcon;
