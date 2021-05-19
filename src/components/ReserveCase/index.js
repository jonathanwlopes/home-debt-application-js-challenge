import Element from "../element/index.js";
import SmallCurrency from "../shared/SmallCurrency/index.js";
import WalletIcon from "../shared/WalletIcon/index.js";
import Title from "../Title/index.js";

const ReserveCase = {
  build: (props) => {
    const _smallCurrency = SmallCurrency.build({
      value: props.totalValue.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }), 
      currency: props.currency,
    });

    const _progressBar = Element({
      typeElement: "div",
      classList: ["progress-bar"],
    });

    const _titleReserve = Title.build({
      classList: ["title-middle", "bold"],
      textContent: props.name,
    });

    const _joinReserve = Element({
      typeElement: "div",
      classList: ["join-reserve"],
      children: [_titleReserve, _progressBar],
    });

    const _walletIcon = WalletIcon.build();

    const _joinIconReserve = Element({
      typeElement: "div",
      classList: ["join-icon-progress"],
      children: [_walletIcon, _joinReserve],
    });

    const _reserveCase = Element({
      typeElement: "div",
      classList: ["wallet-case"],
      children: [_joinIconReserve, _smallCurrency],
    });

    return _reserveCase;
  },
};

export default ReserveCase;
