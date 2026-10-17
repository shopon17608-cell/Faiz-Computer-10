FAIZ COMPUTER WEBSITE — বাংলা সেটআপ গাইড
===========================================

ওয়েবসাইটের ফাইল:
- index.html                 মূল ওয়েবসাইট
- firebase-config.js         Firebase-এর Web App config ও Admin ইমেইল
- firestore.rules            পণ্যের ডেটাবেস নিরাপত্তা
- storage.rules              ছবির স্টোরেজ নিরাপত্তা

গুরুত্বপূর্ণ সীমাবদ্ধতা:
1) এই প্রজেক্টের ফাইল প্রস্তুত, কিন্তু Firebase প্রজেক্টে আপনার নিজের config বসানো এবং নিরাপত্তা rules প্রকাশ না করা পর্যন্ত Admin Panel কাজ করবে না।
2) আপনার দেওয়া "Infinityworld9900" একটি ইমেইল ঠিকানা নয়, যদি না সেটি সম্পূর্ণ ইমেইল হয়। Admin-এর জন্য আপনার আসল Google account email দিন (যেমন name@gmail.com)।
3) Firebase-এর বিনামূল্যের সীমা/প্ল্যান/অঞ্চলভেদে Storage-এর জন্য billing account চাইতে পারে। কোনো টাকা খরচ করবেন না; Firebase Console যদি payment method চাই, থামুন এবং আগে বিকল্প নিয়ে জেনে নিন।
4) GitHub Pages-এ HTML/JS ফাইল প্রকাশ করা যায়; config.js-এ public Firebase client config থাকে। নিরাপত্তা Firestore/Storage rules-এ প্রয়োগ হয়। পাসওয়ার্ড কখনো কোডে লিখবেন না।
5) Admin Panel-এ ছবি upload, পণ্যের নাম, দাম, বিবরণ ও category যোগ/পরিবর্তন/মুছতে UI আছে। পণ্যগুলো Firestore-এ এবং ছবি Storage-এ থাকবে।
6) Firebase-এ rules ও config ঠিকমতো বসানো ও পরীক্ষা না করা পর্যন্ত সাইটকে নিরাপদ/সম্পূর্ণ বলে ধরে নেবেন না।

A. Firebase তৈরি (Android ফোন)
------------------------------
1. Chrome-এ https://console.firebase.google.com খুলুন এবং Google account দিয়ে লগইন করুন।
2. "Create a project" চাপুন। নাম দিন: faiz-computer-showcase
3. Analytics চাইলে আপাতত বন্ধ করতে পারেন। প্রজেক্ট তৈরি করুন।
4. Project Overview-এ Web (</>) আইকন চাপুন। App nickname: Faiz Computer Website. Register app চাপুন।
5. Firebase যে firebaseConfig দেখাবে, সেটি রেখে দিন। এই config-ই firebase-config.js ফাইলে বসাতে হবে। এখানে API key গোপন পাসওয়ার্ড নয়, কিন্তু rules অবশ্যই ঠিক থাকতে হবে।
6. Authentication > Get started > Sign-in method > Email/Password চালু করুন।
7. Authentication > Users থেকে Add user চাপুন এবং আপনার নিজের আসল ইমেইল ও একটি শক্তিশালী পাসওয়ার্ড দিয়ে Admin user তৈরি করুন। পাসওয়ার্ড কারও সঙ্গে শেয়ার করবেন না।
8. Firestore Database > Create database তৈরি করুন। Production mode বেছে নিন।
9. Storage > Get started চাপুন। যদি billing/payment method চায়, টাকা দেবেন না; থামুন এবং বিকল্প জানতে বলুন।

B. Admin email ও config
-----------------------
firebase-config.js খুলে Firebase-এর config-এর মানগুলো বসাতে হবে:
- apiKey
- authDomain
- projectId
- storageBucket
- messagingSenderId
- appId

তারপর adminEmail-এ Authentication-এ তৈরি করা আপনার সম্পূর্ণ email দিন।
উদাহরণ: export const adminEmail = "yourname@gmail.com";

যদি আপনি কোড নিজে সম্পাদনা করতে না চান, ফোনে GitHub-এর file editor দিয়ে এই একবারের config বসানোও একটি সেটআপ ধাপ। Firebase config ছাড়া কোনো ওয়েবসাইট আপনার Firebase project-এ নিজে থেকে সংযুক্ত হতে পারে না।

C. Security Rules
-----------------
Firestore Database > Rules-এ firestore.rules ফাইলের সম্পূর্ণ লেখা পেস্ট করুন।
"REPLACE_WITH_YOUR_REAL_EMAIL" এর দুই জায়গায় আপনার সম্পূর্ণ ইমেইল লিখে Publish চাপুন।

Storage > Rules-এ storage.rules ফাইলের সম্পূর্ণ লেখা পেস্ট করুন।
সেখানেও "REPLACE_WITH_YOUR_REAL_EMAIL" এর জায়গায় একই সম্পূর্ণ ইমেইল লিখে Publish চাপুন।

কোনো নিয়ম প্রকাশের আগে ইমেইল ঠিক আছে নিশ্চিত হোন। Firestore rule অনুযায়ী সবাই পণ্য দেখতে পারবে, কিন্তু create/update/delete শুধু আপনার verified email-এ। Storage rule অনুযায়ী public image read এবং শুধু ওই Admin-এর image upload হবে (প্রতি ছবি 5 MB-এর কম)।

D. GitHub Pages-এ প্রকাশ
------------------------
1. https://github.com খুলুন।
2. New repository তৈরি করুন: faiz-computer-showcase; Public.
3. এই ZIP-এর ভেতরের ফাইলগুলো extract করে repository root-এ আপলোড করুন। ফাইলগুলো root-এ থাকবে, আলাদা folder-এর ভেতরে নয়।
4. index.html, firebase-config.js, firestore.rules, storage.rules, README_BN.txt commit করুন।
5. Repository > Settings > Pages > Build and deployment-এ Deploy from a branch নির্বাচন করুন।
6. Branch main এবং folder /(root) বেছে Save করুন।
7. প্রকাশের লিংক Pages-এর একই জায়গায় আসবে। কয়েক মিনিট লাগতে পারে।

E. সাইট ব্যবহার
---------------
1. ওয়েবসাইট খুলুন; Admin Panel সেকশনে যান।
2. Firebase-এ তৈরি করা একই email ও password দিয়ে লগইন করুন।
3. কার্ডের নাম, দাম, category, বিবরণ লিখুন; ছবি বেছে নিন; সংরক্ষণ করুন।
4. কার্ডটি মূল পণ্যের তালিকায় দেখাবে।
5. সাধারণ দর্শক শুধু পণ্য দেখবে এবং WhatsApp/ফোনে যোগাযোগ করবে। কোনো cart, checkout বা online payment নেই।

সমস্যা হলে:
- "Firebase config not set": firebase-config.js-এর placeholder এখনো বদলানো হয়নি।
- "Admin নয়": adminEmail এবং Firebase rules-এ একই সম্পূর্ণ verified email থাকতে হবে।
- ছবি upload ব্যর্থ: Storage চালু আছে কি না, storage rules এবং Firebase plan/billing চেক করুন।
- website blank: browser console/config/import সমস্যা হতে পারে; config values ঠিক আছে কিনা দেখুন।
