import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import walletCase from "../Wallet/WalletCase/index.js";

const ScrollBox = {
  build: () => {
    const _button = Element({
      typeElement: "button",
      classList: ["default-button"],
      textContent: "Nova Meta",
    });

    const _titleAmount = Element({
      typeElement: "span",
      classList: ["text-amount"],
      textContent: "100.000,00",
    });

    const _titleCurrency = Element({
      typeElement: "span",
      classList: ["text-currency"],
      textContent: "R$",
    });

    const _joiCurrency = Element({
      typeElement: "div",
      classList: ["join-currency"],
      children: [_titleCurrency, _titleAmount],
    });

    const _progressBar = Element({
      typeElement: "div",
      classList: ["progress-bar"],
    });
    const _titleReserve = Element({
      typeElement: "span",
      classList: ["title-middle", "bold"],
      textContent: "Reserva",
    });

    const _joinReserve = Element({
      typeElement: "div",
      classList: ["join-reserve"],
      children: [_titleReserve, _progressBar],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = Element({
      typeElement: "div",
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinIcProgress = Element({
      typeElement: "div",
      classList: ["join-icon-progress"],
      children: [_circle, _joinReserve],
    });

    const _caseGoal = Element({
      typeElement: "div",
      classList: ["wallet-case", "margin-button"],
      children: [_joinIcProgress, _joiCurrency],
    });

    const _titleBox2 = Element({
      typeElement: "h2",
      classList: ["title", "margin-title"],
      textContent: "Metas",
    });

    const _walletBox2 = Element({
      typeElement: "div",
      classList: ["wallet-box"],
      children: [_titleBox2, _caseGoal, _button],
    });

    const _walletCase = walletCase.build();

    const _walletBox = Element({
      typeElement: "div",
      classList: ["wallet-box"],
      children: [_walletCase],
    });

    const _scrollBox = Element({
      typeElement: "div",
      classList: ["scroll-box"],
      children: [_walletBox, _walletBox2],
    });

    return _scrollBox;
  },
};

export default ScrollBox;
