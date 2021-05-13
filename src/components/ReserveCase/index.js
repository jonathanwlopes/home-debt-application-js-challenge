import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const ReserveCase = {
  build: () => {
    const _amountSmallCurrency2 = Title.build({
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleSmallCurrency2 = Title.build({
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joinSmallCurrency2 = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleSmallCurrency2, _amountSmallCurrency2],
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
      children: [_joinCircleReserve, _joinSmallCurrency2],
    });

    return _reserveCase;
  },
};

export default ReserveCase;
