const { Firestore } = require("@google-cloud/firestore");

// Inisialisasi Firestore menggunakan kredensial bawaan (ADC)
const db = new Firestore({
  databaseId: "(default)",
});

async function getPredictionHistoryHandler(request, h) {
  try {
    const predictionsSnapshot = await db.collection("predictions").get();

    const predictions = predictionsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        history: {
          result: data.result,
          createdAt: data.createdAt,
          suggestion: data.suggestion,
          id: doc.id,
        },
      };
    });

    const response = h.response({
      status: "success",
      data: predictions,
    });
    response.code(200);
    return response;
  } catch (error) {
    const response = h.response({
      status: "fail",
      message: `Failed to retrieve prediction histories: ${error.message}`,
    });
    response.code(500);
    return response;
  }
}

module.exports = getPredictionHistoryHandler;
