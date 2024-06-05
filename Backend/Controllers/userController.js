const getUsers = (req, res) => {
  res.send("users");
};
const getUser = (req, res) => {
  res.send(`user by Id ${req.params.id} `);
};
const createUser = (req, res) => {
  res.send("users");
};
const updateUser = (req, res) => {
  res.send(`update user by Id ${req.params.id} `);
};
const removeUser = (req, res) => {
  res.send(`remove user by Id ${req.params.id} `);
};

export { getUsers, getUser, createUser, updateUser, removeUser };
