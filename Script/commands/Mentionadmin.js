module.exports.config = {
 name: "adminmention",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "SHAHADAT SAHU ",
 description: "Bot will reply when someone tags any of the admins",
 commandCategory: "Other",
 usages: "@",
 cooldowns: 1
};

module.exports.handleEvent = function({ api, event }) {
 const adminIDs = ["61571107303187", "100001039692046", "100044713412032"].map(String);
 
 if (adminIDs.includes(String(event.senderID))) return;

 const mentionedIDs = event.mentions ? Object.keys(event.mentions).map(String) : [];
 const isMentioningBoss = adminIDs.some(adminID => mentionedIDs.includes(adminID));

 if (isMentioningBoss) {
 const replies = [
 " বসকে না ডেকে নোমান কে চোদ সবাই মিলে😒😌",
 "বস এক আবালে আপনাকে মেনশন দিছে 😑😃",
 " রুদ্রর মেসেজের রিপ্লাই না দিয়ে শিরিন হিজলারে মেনশন দে 🫥😒",
 "বস এক পাগল ছাগল , আপনাকে ডাকতেছে 🐸🫵",
 "বস এক হালায় আপনার নাম ধরছে , আপনি শুধু একবার আদেশ করুন, আজকে হালার নানিরে চমলক্ক করে দিমু 😑🥴",
 "মেনশন না দিয়া একটা girlfriend খুজে দে 🙃😮💨",
 "হিজলা হলে নোমানের ইনবক্স এ যাও তাও বসের রিপ্লাইর আসা করো না 😗😁",
 "বস এখন ব্যস্ত আছে , কিছু বলতে হলে ইনবক্স এ গিয়া বল",
 "বস এখন আমার সাথে মিটিং এ আছে , মেনশন দিস না 🙂",
 "বস এখন ব্যস্ত আছে , কি বলবি আমাকে বল",
 "মেনশন না দিয়া ইশির ধোন ধরে টান 🥵💋",
 "কিরে তোর এতো সাহস আমার বসের নাম ধরিস😾🫵",
 "এতো মেনশন না দিয়া নোমানের পুটকিতে আঙ্গুল দে😹🐸",
 "এইভাবে রিপ্লাই করতাস, না জানি তুই হিজলা রামিশার প্রেমে পরে গেছোস 😼❤️"
 ];
 return api.sendMessage(replies[Math.floor(Math.random() * replies.length)], event.threadID, event.messageID);
 }
};

module.exports.run = async function() {};
