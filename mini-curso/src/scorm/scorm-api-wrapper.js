
export const SCORM = {
  API: null,
  init() {
    this.API = this.getAPI();
    if (this.API) this.API.LMSInitialize("");
  },
  getAPI() {
    if (window.parent && window.parent.API) return window.parent.API;
    if (window.top && window.top.opener && window.top.opener.API) return window.top.opener.API;
    return null;
  },
  recordScore(score, passed) {
    if (!this.API) return console.log("Sem SCORM API");
    this.API.LMSSetValue("cmi.core.score.raw", score);
    this.API.LMSSetValue("cmi.core.lesson_status", passed ? "passed" : "failed");
    this.API.LMSCommit("");
  },
  completeCourse() {
    if (!this.API) return;
    this.API.LMSSetValue("cmi.core.lesson_status", "completed");
    this.API.LMSCommit("");
    this.API.LMSFinish("");
  }
};
