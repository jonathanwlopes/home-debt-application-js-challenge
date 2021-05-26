import Images from "../assets/img/index.js";
import Element from "../element/index.js";
import Title from "../Title/index.js";

const DateParcelCase = {
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
      typeElement: "div",
      classList: ["join-text"],
      children: [_title2, _title3],
    });

    const _tickOk = Element({
      typeElement: "img",
      classList: ["icon", "inactive"],
      src: Images.tick,
      attribute: {
        id: "tick",
      },
    });

    const _tick = Element({
      typeElement: "div",
      classList: ["tick"],
      children: [_tickOk],
    });

    const _parcel = Element({
      typeElement: "input",
      classList: ["input-default"],
      attribute: {
        type: "number",
        placeholder: "1 Vez",
        id: "parcel",
        disabled: "",
        min: 1,
        max: 12,
      },
    });

    _tick.addEventListener("click", () => {
      if (!_tickOk.classList.contains("inactive")) {
        _parcel.value = "";
      }

      _tickOk.classList.toggle("inactive");

      _tickOk.classList.contains("inactive")
        ? _parcel.setAttribute("disabled", "disabled")
        : _parcel.removeAttribute("disabled");
    });

    const _wapperParcel = Element({
      typeElement: "div",
      classList: ["wrapper-parcel"],
      children: [_parcel, _tick, _joinText3],
    });

    const _titleParcel = Title.build({
      classList: ["title-big", "bold"],
      textContent: "Parcelas",
    });

    const _joinParcel = Element({
      typeElement: "div",
      classList: ["join-parcel"],
      children: [_titleParcel, _wapperParcel],
    });

    const _date = Element({
      typeElement: "input",
      classList: ["input-default"],
      attribute: {
        type: "date",
        id: "date",
      },
    });

    const _titleDate = Title.build({
      classList: ["title-big", "bold"],
      textContent: "Data",
    });

    const _joinDate = Element({
      typeElement: "div",
      classList: ["join-date"],
      children: [_titleDate, _date],
    });

    const _dateParcelCase = Element({
      typeElement: "div",
      classList: ["date-parcel-box"],
      children: [_joinDate, _joinParcel],
    });

    return _dateParcelCase;
  },
};

export default DateParcelCase;
