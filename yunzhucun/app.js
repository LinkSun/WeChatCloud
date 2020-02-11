//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: "cloud-wtzkv"
    })
  }
})