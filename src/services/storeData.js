const { Firestore } = require("@google-cloud/firestore");
const serviceAccount = require("../../keys.json");

async function storeData(id, data) {
  const db = new Firestore({
    databaseId: "predictions",
    projectId: serviceAccount.project_id,
    credentials: serviceAccount,
  });

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
