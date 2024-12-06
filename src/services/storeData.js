const { Firestore } = require("@google-cloud/firestore");

async function storeData(id, data) {
  // Inisialisasi Firestore tanpa kredensial manual
  const db = new Firestore();

  const predictCollection = db.collection("predictions");
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
