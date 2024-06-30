/** @format */

import { setUserId } from "firebase/analytics";
import { analytics, logEvent } from "./firebase";

async function getPublicIP() {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = res.json();
    return data.ip;
  } catch (e) {
    console.log("Error");
  }
}

const browserInfo = {
  userAgent: navigator.userAgent,
  appName: navigator.appName,
  appVersion: navigator.appVersion,
  platform: navigator.platform,
  vendor: navigator.vendor,
  language: navigator.language,
};

async function downloadCV() {
  try {
    const IP = await getPublicIP();
    setUserId(analytics, IP);
    logEvent(analytics, "resume_download", { ip: IP, browser: browserInfo });
  } catch (e) {
    logEvent(analytics, "error", { error: e });
    console.error("The logging failed");
  } finally {
    window.location.href =
      "https://drive.google.com/file/d/1D6B7GboV2_WrZw8lkGKixeWyTdk5BuYn/view?usp=sharing";
  }
}

export { downloadCV };
