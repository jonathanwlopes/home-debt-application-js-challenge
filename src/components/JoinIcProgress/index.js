import Images from "../assets/img/index.js";
import Element from "../element/index.js";



const JoinIcProgress = {
    build: () => {
        
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

      return _joinIcProgress
    }

}

export default JoinIcProgress