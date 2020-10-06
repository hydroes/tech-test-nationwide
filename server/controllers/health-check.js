module.exports = async (req, res) => {
  try {
    await Transaction.findById(1);
    const response = { message: `Database connection successful and app ready for requests.` };
    res.send(response);
  } catch (error) {
    res.status(422).send(error);
  }
}