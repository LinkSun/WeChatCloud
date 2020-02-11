
// const DB = wx.cloud.database().collection('cloudList')  
Page({
 
    addnum(){
      wx.cloud.callFunction({
        // 云函数名称
        name: 'add',
        // 传给云函数的参数
        data: {
          a: 1,
          b: 2,
        },
        success: function (res) {
          console.log(res) // 3
        },
        fail: console.error
      })
    },
    // 获取用户id
  getid(){
wx.cloud.callFunction({
  name:"getopenid",
  success: function (res) {
    console.log(res.result.openid) 
  },
  fail: console.error
})
  },
  // 获取数据库数据
  getsqlnum(){
wx.cloud.database().collection('user').get({

success(res){
  console.log("获取数据成功",res)

},
  fail(res){
  console.log(res)
}
})
  },
  // 云函数获取数据库数据
  getshujuku(){
wx.cloud.callFunction({
  name:"getshujuku",
  success(res) {
    console.log("获取数据成功", res)

  },
  fail(res) {
    console.log(res)
  }
})
  }
})
