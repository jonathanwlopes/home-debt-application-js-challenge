import db_Bills from "../../components/data/index.js";

const fillProgress = () => {
  const $progressBar = document.querySelectorAll(".progress-bar");

  const goalList = db_Bills.getGoals(2);

  goalList.forEach((goal, index) => {
    const amountValue = goal.amountValue;
    const totalValue = goal.totalValue;
    const porcent = (totalValue * amountValue) / 100;

    if (amountValue > 0 && $progressBar) {
      $progressBar[index].style.width = `${porcent}%`;
    }
  });
};

export default fillProgress;
