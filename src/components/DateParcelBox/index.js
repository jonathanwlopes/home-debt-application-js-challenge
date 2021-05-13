import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const DateParcelBox = {
    build: () => {
        const _title3 = Title.build({
            classList: ["title-small"],
            textContent: "Valor",
          });
      
          const _title2 = Title.build({
            classList: ["title-small"],
            textContent: "Dividir",
          });
      
          const _joinText3 = Element({
            typeElement: 'div',
            classList: ["join-text"],
            children: [_title2, _title3],
          });
      
          const _tickOk = Element({
            typeElement: "img",
            classList: ["icon"],
            src: Images.tick,
          });
      
          const _tick = Element({
            typeElement: 'div',
            classList: ["tick"],
            children: [_tickOk],
          });
      
          const _input2 = Element({
            typeElement: "input",
            classList: ["input-default"],
            attribute: {
              frist: ["type", "text"],
              second: ["placeholder", "1 Vez"],
            },
          });
      
          const _wapperParcel = Element({
            typeElement: 'div',
            classList: ["wrapper-parcel"],
            children: [_input2, _tick, _joinText3],
          });
      
          const _titleParcel = Title.build({
            classList: ["title-big", "bold"],
            textContent: "Parcelas",
          });
      
          const _joinParcel = Element({
            typeElement: 'div',
            classList: ["join-parcel"],
            children: [_titleParcel, _wapperParcel],
          });
      
          const _input = Element({
            typeElement: "input",
            classList: ["input-default"],
            attribute: {
              frist: ["type", "date"],
              second: ["a", "b"], // BUG FIX
            },
          });
      
          const _titleDate = Title.build({
            classList: ["title-big", "bold"],
            textContent: "Data",
          });

          const _joinDate = Element({
            typeElement: 'div',
            classList: ["join-date"],
            children: [_titleDate, _input],
          });
      
          const _dateParcelBox = Element({
              typeElement: 'div',
            classList: ["date-parcel-box"],
            children: [_joinDate, _joinParcel],
          });

          return _dateParcelBox
    }
}

export default DateParcelBox