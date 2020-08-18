import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyDsG1BAmiY_Olol_57KPoDYTbJq53VqyEY",
  authDomain: "finnimo-1635d.firebaseapp.com",
  databaseURL: "https://finnimo-1635d.firebaseio.com",
  projectId: "finnimo-1635d",
  storageBucket: "finnimo-1635d.appspot.com",
  messagingSenderId: "764136096933",
  appId: "1:764136096933:web:a0be9307a6e9991b19f94c",
  measurementId: "G-CB89TZDCTK",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export const requestFirebaseNotificationPermission = () =>
  new Promise((resolve, reject) => {
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((firebaseToken) => {
        resolve(firebaseToken);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      console.log("earn : ", payload);
      resolve(payload);
    });
  });
