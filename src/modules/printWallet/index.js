import db_Bills from "../../components/data/index.js";
import WalletCase from "../../components/WalletCase/index.js";

const printWallet = () => {
  const $walletCase = document.querySelector("#wallet-case");
  $walletCase.textContent = "";

  const user = db_Bills.getUserById(2);
  const walletList = db_Bills.getWallets(2);

  walletList.forEach((wallet) => {
    const newWallet = WalletCase.build({
      classList: ["wallet-case"],
      value: wallet.credit.toLocaleString("pt-br", {
        minimumFractionDigits: 2,
      }),
      currency: user.currency,
      bank: wallet.bank,
      type: wallet.type,
    });

    $walletCase.appendChild(newWallet);
  });
};

export default printWallet;
