importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// همون کانفیگ فایربیس خودت
firebase.initializeApp({
  apiKey: "AIzaSyC8meGzceNNyMuTUdCoMBF27yqxQ1LDwh0",
  authDomain: "english-gap.firebaseapp.com",
  projectId: "english-gap",
  storageBucket: "english-gap.firebasestorage.app",
  messagingSenderId: "1090682846530",
  appId: "1:1090682846530:web:dfc0efbbaf4fca4b2f9cdb"
});

const messaging = firebase.messaging();

// دریافت پیام وقتی سایت کاملاً بسته است
messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.data.title || 'English Gap';
  const notificationOptions = {
    body: payload.data.body || 'پیام جدید داری!',
    icon: 'f.png',
    tag: 'chat-msg' // برای اینکه نوتیف‌ها رو هم نیفتن و گوشی شلوغ نشه
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});