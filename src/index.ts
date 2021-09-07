import * as coingate from "./coingate";

// const testCoingate = functions.https.onRequest(async (req, res) => {
//   res.json({
//     token: AUTH_TOKEN
//   })
// })

for (let k in coingate) exports[k] = (coingate as any)[k];

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
