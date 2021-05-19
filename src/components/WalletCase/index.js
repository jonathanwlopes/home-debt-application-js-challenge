import Element from "../element/index.js";
import SmallCurrency from "../shared/SmallCurrency/index.js";
import WalletIcon from "../shared/WalletIcon/index.js";
import Title from "../Title/index.js";

const WalletCase = {
  build: (props) => {
    
    const _smallCurrency = SmallCurrency.build({
      value: props.value,
      currency: props.currency
    });

    const _walletSubTitle = Title.build({
      classList: ["sub-title-middle"],
      textContent: props.bank,
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: props.type
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
      classList: ["wallet-case"],
      children: [_joinIconText, _smallCurrency],
    });

    return _walletCase;
  },
};

export default WalletCase;
