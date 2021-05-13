import generateId from "../../utils/generateID/index.js";

const db_Bills = {
  userList: [
    {
      _id: 1,
      name: "Jonathan",
      lastName: "Lopes",
      totalValue: 10000,
      currency: 'R$',
      wallets: [
        {
          _id: 50,
          type: "Cartão",
          flag: "Mastercard",
          credit: 500,
          bills: [
            {
              _id: 100,
              type: "Luz",
              value: 200,
            },
          ],
        },
      ],
      goals: [
        {
          _id: 100,
          goal: "Casa",
          totalValue: 100000,
          amountValue: 2000,
        },
      ],
    },
    {
      _id: 2,
      name: "Marcos",
      lastName: "Maia",
      totalValue: 1000.97,
      currency: '$',
      wallets: [
        {
          _id: 50,
          type: "Dinheiro",
          flag: "Dolar",
          credit: 15000,
          bills: [
            {
              _id: 100,
              type: "Água",
              value: 100,
            },
          ],
        },
      ],
      goals: [
        {
          _id: 100,
          goal: "Casa",
          totalValue: 1000000,
          amountValue: 22000,
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

  getWalletUser: (userId) => {
    const user = db_Bills.getUserById(userId);

    const walletList = [...user.wallets];

    return walletList;
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

  getBills: (walletId) => {
    const userList = db_Bills.getUsers();

    const user = userList.find((user) =>
      user.wallets.some((wallet) => wallet._id === walletId)
    );

    const wallet = user.wallets.find((wallet) => wallet._id === walletId);

    const bills = wallet.bills;

    return bills;
  },
};

export default db_Bills;
