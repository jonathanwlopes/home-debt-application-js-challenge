import Images from "../../components/assets/img/index.js";
import StylesLink from "../../components/assets/Styles/index.js";
import Element from "../../components/element/index.js";
import GenerateDiv from "../../components/GenerateDiv/index.js";
import Nav from "../../components/Nav/index.js";
import Title from "../../components/Title/index.js";
import importStyles from "../../utils/import/css/index.js";

const CostNext = {
  build: () => {
    const $root = document.querySelector("#root");

    importStyles({
      value: [
        StylesLink.global,
        StylesLink.container,
        StylesLink.costBox,
        StylesLink.nav,
        StylesLink.fieldCase,
        StylesLink.dateParcelBox,
        StylesLink.joinDate,
        StylesLink.joinParcel,
        StylesLink.tagsBox,
        StylesLink.joinTag,
        StylesLink.tagContent,
        StylesLink.addTag,
        StylesLink.walletBox,
        StylesLink.walletCase,
        StylesLink.shared.text,
        StylesLink.shared.icon,
        StylesLink.shared.circle,
        StylesLink.shared.progressBar,
        StylesLink.shared.button,
        StylesLink.shared.close,
        StylesLink.shared.colors,
        StylesLink.shared.tick,
        StylesLink.shared.input,
        StylesLink.shared.textArea,
      ],
    });
//
const _walletSubTitle2 = Title.build({
    classList: ["title-small"],
    textContent: "nome",
  });

  const _walletTitle2 = Title.build({
    classList: ["title-middle", "bold"],
    textContent: "Carteira",
  });

  const _joinText2 = GenerateDiv.build({
    classList: ["join-text"],
    children: [_walletTitle2, _walletSubTitle2],
  });

  const _iWallet2 = Element({
    typeElement: "img",
    classList: ["icon"],
    src: Images.iwallet,
  });

  const _circle2 = GenerateDiv.build({
    classList: ["default-circle"],
    children: [_iWallet2],
  });

  const _joinCircleText2 = GenerateDiv.build({
    classList: ["join-icon-text"],
    children: [_circle2, _joinText2],
  });

  const _walletCase2 = GenerateDiv.build({
    classList: ["wallet-case", "blue"],
    children: [_joinCircleText2],
  });
    //

    const _amountSmallCurrency = Title.build({
        classList: ["text-amount"],
        textContent: "100.000,00",
      });
  
      const _titleSmallCurrency = Title.build({
        classList: ["text-currency"],
        textContent: "R$",
      });
  
      const _joinSmallCurrency = GenerateDiv.build({
        classList: ["join-currency"],
        children: [_titleSmallCurrency, _amountSmallCurrency],
      });

    const _walletSubTitle = Title.build({
      classList: ["title-small"],
      textContent: "nome",
    });

    const _walletTitle = Title.build({
      classList: ["title-middle", "bold"],
      textContent: "Carteira",
    });

    const _joinText = GenerateDiv.build({
      classList: ["join-text"],
      children: [_walletTitle, _walletSubTitle],
    });

    const _iWallet = Element({
      typeElement: "img",
      classList: ["icon"],
      src: Images.iwallet,
    });

    const _circle = GenerateDiv.build({
      classList: ["default-circle"],
      children: [_iWallet],
    });

    const _joinCircleText = GenerateDiv.build({
      classList: ["join-icon-text"],
      children: [_circle, _joinText],
    });

    const _walletCase = GenerateDiv.build({
      classList: ["wallet-case", "blue"],
      children: [_joinCircleText, _joinSmallCurrency],
    });

    const _amountCurrency = Title.build({
        classList: ["text-amount"],
        textContent: "100.000,00",
      });
  
      const _titleCurrency = Title.build({
        classList: ["text-currency"],
        textContent: "R$",
      });

    const _joinCurrency = GenerateDiv.build({
        classList: ['join-currency'],
        children: [_titleCurrency, _amountCurrency]
    })

    const _close = Title.build({
      classList: ["close"],
      textContent: "X",
    });

    const _fieldCase = GenerateDiv.build({
      classList: ["field-case"],
      children: [_close, _joinCurrency],
    });
    const _costBox = GenerateDiv.build({
      classList: ["cost-box"],
      children: [_fieldCase, _walletCase],
    });

    const _nav = Nav.build();

    const _container = GenerateDiv.build({
      classList: ["container"],
      children: [_nav, _costBox],
    });

    $root.appendChild(_container);

    return _container;
  },
};

export default CostNext;
