const { billings } = require("../models/billling.models.js");

function getBilling(req, res) {
  res.status(200).json(billings);
}

function postBilling(req, res) {
  if (!req.body.contactPerson) {
    return res.status(400).json({
      error: "Missing contact person",
    });
  }
  const newBilling = {
    contactPerson: req.body.contactPerson,
    businessName: req.body.businessName,
    address: req.body.address,
    city: req.body.city,
  };
  billings.push(newBilling);
  res.status(201).json(newBilling);
  console.log(billings);
}

module.exports = {
  getBilling,
  postBilling,
};

//Pj7OqVsBOrtfsDFF

//V5TL1lprxR1FP2aD
