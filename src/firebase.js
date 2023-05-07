/* CONFIG FIREBASE */
const { initializeApp } = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyBNFYNaPU3qUr40S-KdvSk5iNf-DDjfEeM",
  authDomain: "medialert-eb516.firebaseapp.com",
  projectId: "medialert-eb516",
  storageBucket: "medialert-eb516.appspot.com",
  messagingSenderId: "80977437320",
  appId: "1:80977437320:web:3ada9823a0a982b816353d"
};
const app = initializeApp(firebaseConfig);

/* CONFIG FIREBASE-ADMIN */
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "medialert-eb516.appspot.com",
});

/* EXPORTAR */
module.exports = {
    app,
    admin
};