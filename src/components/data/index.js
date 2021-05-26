import generateId from "../../utils/generateID/index.js";

const db_Bills = {
  userList: [
    {
      _id: 1,
      name: "Jonathan",
      lastName: "Lopes",
      totalValue: 10000,
      currency: "R$",
      wallets: [
        {
          _id: 50,
          type: "Poupança",
          bank: "Caixa",
          credit: 50000,
        },
        {
          _id: 51,
          type: "Conta Corrente",
          flag: "Santander",
          credit: 1000,
        },
        {
          _id: 52,
          type: "Dinheiro",
          flag: "Conta Corrente",
          credit: 500,
        },
      ],
      bills: [
        {
          _id: 300,
          type: "Luz",
          value: 200,
          pay: false,
        },
        {
          _id: 301,
          type: "Água",
          value: 100,
          pay: true,
        },
      ],
      goals: [
        {
          _id: 6000,
          name: "Faculdade",
          totalValue: 10000,
          amountValue: 2000,
        },
      ],
    },
    {
      _id: 2,
      name: "Marcos",
      lastName: "Maia",
      totalValue: 6000,
      currency: "$",
      wallets: [
        {
          _id: 100,
          type: "Poupança",
          bank: "Caixa",
          credit: 500,
        },
        {
          _id: 101,
          type: "Corrente",
          bank: "Santander",
          credit: 500,
        },
        {
          _id: 102,
          type: "Dinheiro",
          bank: "Corrente",
          credit: 500,
        },
      ],
      bills: [
        {
          _id: 201,
          typePay: "Cartão",
          totalValue: 200,
          dueDate: new Date(2021, 11, 17),
          pay: false,
          parcel: {
            splitValue: true,
            amountSplit: 2,
          },
          tag: ["Sapatos", "Roupas"],
          obs: "Vestimentas para comemoração do Ano Novo.",
        },
        {
          _id: 200,
          typePay: "Cartão",
          totalValue: 200,
          dueDate: new Date(2021, 11, 17),
          pay: false,
          parcel: {
            splitValue: true,
            amountSplit: 2,
          },
          tag: ["Sapatos", "Roupas"],
          obs: "Vestimentas para comemoração do Ano Novo.",
        },
      ],
      goals: [
        {
          _id: 5000,
          name: "Casa",
          totalValue: 100,
          amountValue: 25,
        },
        {
          _id: 5001,
          name: "Mobilia",
          totalValue: 100,
          amountValue: 50,
        },
      ],
    },
  ],

  getUsers: () => {
    return [...db_Bills.userList];
  },

  getUserById: (id) => {
    const userList = db_Bills.getUsers();

    const user = userList.find((user) => {
      if (user._id === id) {
        return user;
      }
    });

    return user;
  },

  removeUser: (id) => {
    const userList = db_Bills.getUsers();

    const newUserList = userList.filter((user) => user._id !== id);

    db_Bills.userList = newUserList;
  },

  getWallets: (userId) => {
    const user = db_Bills.getUserById(userId);

    const walletList = [...user.wallets];

    return walletList;
  },

  getWalletById: (userId, walletId) => {
    const walletList = db_Bills.getWallets(userId);

    const wallet = walletList.find((wallet) => {
      if (wallet._id === walletId) {
        return wallet;
      }
    });

    return wallet;
  },

  createWallet: (userId, wallet) => {
    const userList = db_Bills.getUsers();

    const newUserList = userList.reduce((acc, user) => {
      const newUser = {
        ...user,
        wallets: [...user.wallets, { ...wallet, _id: generateId() }],
      };

      if (user._id !== userId) return [...acc, user];
      return [...acc, newUser];
    }, []);

    db_Bills.userList = newUserList;

    return newUserList;
  },

  getGoals: (userId) => {
    const user = db_Bills.getUserById(userId);

    const goalList = [...user.goals];

    return goalList;
  },

  getGoalById: (userId, goalId) => {
    const goalList = db_Bills.getGoals(userId);

    const goal = goalList.find((goal) => goal._id === goalId);

    return goal;
  },

  createGoal: (userId, goal) => {
    const user = db_Bills.getUserById(userId);
    const goalList = db_Bills.getGoals(userId);

    goalList.push(goal);

    user.goals = [...goalList];
  },

  getBills: (userId) => {
    const userList = db_Bills.getUserById(userId);

    const billsList = [...userList.bills];

    return billsList;
  },

  getBillsById: (userId, billsId) => {
    const billsList = db_Bills.getBills(userId);

    const bills = billsList.find((bills) => bills._id === billsId);

    return bills;
  },

  createBills: (userId, newBills) => {
    const user = db_Bills.getUserById(userId);
    user.bills.push(newBills);
    console.log(user);
    return user;
  },
};

export default db_Bills;
