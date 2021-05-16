import Images from "../assets/img/index.js";
import db_Bills from "../data/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const ReserveCase = {
  build: () => {
    const user = db_Bills.getUserById(2);

    const goal = db_Bills.getGoalById(2, 5001);

    const _amountSmallCurrency = Title.build({
      classList: ["text-amount"],
      textContent: goal.amountValue.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }),
    });

    const _titleSmallCurrency = Title.build({
      classList: ["text-currency"],
      textContent: user.currency,
    });

    const _joinSmallCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleSmallCurrency, _amountSmallCurrency],
    });

    const _progressBar = Element({
      typeElement: "div",
      classList: ["progress-bar"],
    });

    const _titleReserve = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Reserva",
    });

    const _joinReserve = Element({
      typeElement: "div",
      classList: ["join-reserve"],
      children: [_titleReserve, _progressBar],
    });

    const _iWallet2 = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle2 = Element({
      typeElement: "div",
      classList: ["default-circle"],
      children: [_iWallet2],
    });

    const _joinCircleReserve = Element({
      typeElement: "div",
      classList: ["join-icon-progress"],
      children: [_circle2, _joinReserve],
    });

    const _reserveCase = Element({
      typeElement: "div",
      classList: ["wallet-case", "margin-button"],
      children: [_joinCircleReserve, _joinSmallCurrency],
    });

    return _reserveCase;
  },
};

export default ReserveCase;
