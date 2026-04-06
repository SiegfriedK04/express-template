const getExample = (req, res) => {
  res.json({ message: "Hello from the template!" });
};

module.exports = { getExample };