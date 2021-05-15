import db_Bills from "../data/index.js";
import Element from "../element/index.js";
import SmallCurrency from "../shared/SmallCurrency/index.js";
import WalletIcon from "../shared/WalletIcon/index.js";
import Title from "../Title/index.js";

const WalletCase = {
  build: (props) => {
    const wallet = db_Bills.getWalletById(2,100)
    

    const _smallCurrency = SmallCurrency.build({
      value: wallet.credit.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }),
      currency: wallet.currency
    });

    const _walletSubTitle = Title.build({
      classList: ["sub-title-middle"],
      textContent: wallet.bank,
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: wallet.type,
    });

    const _joinText = Element({
      typeElement: "div",
      classList: ["join-text"],
      children: [_walletTitle, _walletSubTitle],
    });

    const _walletIcon = WalletIcon.build();

    const _joinIconText = Element({
      typeElement: "div",
      classList: ["join-icon-text"],
      children: [_walletIcon, _joinText],
    });

    const _walletCase = Element({
      typeElement: "div",
      classList: props.classList,
      children: [_joinIconText, _smallCurrency],
    });

    return _walletCase;
  },
};

export default WalletCase;
