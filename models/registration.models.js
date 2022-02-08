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

const registerRecord = [
  {
    id: 0,
    contactPerson: "Ruona Agadagba",
    BusinessName: "Prime Competence",
    streetAddress: "7 osayande street off saplele road benin city",
    email: "ogheneruonaagadagba4@gmail.com",
    state: "Benin City",
  },
];

saveRegister(registerRecord);

module.exports = { registerRecord };
