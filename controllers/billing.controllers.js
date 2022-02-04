const { billings } = require("../routes/billling.models.js");

function getBilling(req, res) {
  res.status(200).json("Welcome to billing page");
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
