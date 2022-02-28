const registerDatabase = require("./register.mongo");

async function saveRegister(registerRecord) {
  await registerDatabase.updateOne(
    {
      contactPerson: registerRecord.contactPerson,
    },
    {
      BusinessName: registerRecord.BusinessName,
    }
  );
}

const registerRecord = [];

saveRegister(registerRecord);

module.exports = { registerRecord };
