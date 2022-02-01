const { registerRecord } = require("../routes/registration.models");

function getRegisters(req, res) {
  res.status(200).json(registerRecord);
}

function postRegisters(req, res) {
  const newRegisters = {
    constactPerson: req.body.contactPerson,
    BusinessName: req.body.BusinessName,
    streetAddress: req.body.streetAddress,
    email: req.body.email,
    state: req.body.state,
  };
  registerRecord.push(newRegisters);
  res.status(200).json(newRegisters);
  console.log(newRegisters);
}

module.exports = {
  postRegisters,
  getRegisters,
};
