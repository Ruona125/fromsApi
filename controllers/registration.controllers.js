const { registerRecord } = require("../routes/registration.models");

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

function getRegisters(req, res) {
  res.status(200).json(registerRecord);
}

module.exports = {
  postRegisters,
  getRegisters,
};
