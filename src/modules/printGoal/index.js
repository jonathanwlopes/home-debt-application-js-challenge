import db_Bills from "../../components/data/index.js";
import ReserveCase from "../../components/reserveCase/index.js";

const printGoal = (userId) => {
  const $wrapperCases = document.querySelector("#wrapper-cases");
  $wrapperCases.textContent = "";

  const user = db_Bills.getUserById(userId);
  const goalList = db_Bills.getGoals(userId);

  goalList.forEach((item) => {
    const goal = ReserveCase.build({
      currency: user.currency,
      name: item.name,
      totalValue: item.totalValue,
    });
    $wrapperCases.appendChild(goal);
  });
};

export default printGoal;
