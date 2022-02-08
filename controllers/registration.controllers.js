const { registerRecord } = require("../models/registration.models");

function getRegisters(req, res) {
  res.status(200).json(registerRecord);
}

function postRegisters(req, res) {
  if (!req.body.contactPerson) {
    return res.status(400).json({
      error: "Missing contact person",
    });
  }
  const newRegisters = {
    constactPerson: req.body.contactPerson,
    BusinessName: req.body.BusinessName,
    streetAddress: req.body.streetAddress,
    email: req.body.email,
    state: req.body.state,
  };
  registerRecord.push(newRegisters);
  res.status(201).json(newRegisters);
  console.log(newRegisters);
}

module.exports = {
  postRegisters,
  getRegisters,
};
