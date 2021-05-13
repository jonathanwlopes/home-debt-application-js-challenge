const generateId = (limit = 30) => {
  const characts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let id = "";

  for (let i = 0; i < limit; i++) {
    const randomNumber = Math.floor(Math.random() * characts.length);
    id += characts[randomNumber];
  }

  return id;
};

export default generateId;
