importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.2/firebase-messaging.js");

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

messaging.setBackgroundMessageHandler(function (payload) {
  console.log("[firebase-messaging-sw.js] Received background message ", payload);

  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: "/firebase-logo.png",
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener("notificationclick", (event) => {
  console.log(event);
  return event;
});

// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log("[firebase-messaging-sw.js] Received background message ", payload);
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png",
//   };

//   return self.registration.showNotification(notificationTitle, notificationOptions);
// });

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("./firebase-messaging-sw.js")
//     .then(function (registration) {
//       // eslint-disable-next-line no-console
//       console.log("[SW]: SCOPE: ", registration.scope);
//       // return registration.scope;
//     })
//     .catch(function (err) {
//       console.log(err);
//       // return err;
//     });
// }
