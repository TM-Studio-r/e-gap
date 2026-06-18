importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyC8meGzceNNyMuTUdCoMBF27yqxQ1LDwh0",
    authDomain: "english-gap.firebaseapp.com",
    projectId: "english-gap",
    storageBucket: "english-gap.firebasestorage.app",
    messagingSenderId: "1090682846530",
    appId: "1:1090682846530:web:dfc0efbbaf4fca4b2f9cdb"
});

const messaging = firebase.messaging();

// این بخش وقتی کار میکنه که تب کاملاً بسته است
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.data.title || 'English Gap';
  const notificationOptions = {
    body: payload.data.body || 'پیام جدید داری!',
    icon: 'icon-192.png',
    tag: 'chat-msg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// نصب سریع ورکر
self.addEventListener('install', (event) => {
    self.skipWaiting();
});
