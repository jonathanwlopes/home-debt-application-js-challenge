import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const CategoryCase = {
    build: () => {

        const _addCategory = Element({
            typeElement: "img",
            classList: ["icon", "icon-margin-right", "icon-effect"],
            src: Images.add,
          });
      
          const _walletSubTitle2 = Title.build({
            classList: ["title-small"],
            textContent: "nome",
          });
      
          const _walletTitle2 = Title.build({
            classList: ["title-middle", "bold"],
            textContent: "Categoria",
          });
      
          const _joinText2 = Element({
            typeElement: 'div',
            classList: ["join-text"],
            children: [_walletTitle2, _walletSubTitle2],
          });
      
          const _iWallet2 = Element({
            typeElement: "img",
            classList: ["icon"],
            src: Images.iwallet,
          });

          const _circle2 = Element({
            typeElement: 'div',
            classList: ["default-circle"],
            children: [_iWallet2],
          });
      
          const _joinCircleText2 = Element({
            typeElement: 'div',
            classList: ["join-icon-text"],
            children: [_circle2, _joinText2],
          });
      
          const _categoryCase = Element({
              typeElement: 'div',
            classList: ["wallet-case", "blue"],
            children: [_joinCircleText2, _addCategory],
          });

          return _categoryCase
    }
}

export default CategoryCase