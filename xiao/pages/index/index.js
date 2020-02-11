// 连接数据库 ,在数据库新建list库
const DB = wx.cloud.database().collection('list')  
let name=""
let age=""
let id=""
Page({
  // 获取表单数据
  addName(e) {
  name = e.detail.value
  },
  addAge(e) {
   age = e.detail.value
  },
  deleteId(e){
    id = e.detail.value
  },
 
  btnadd:function(){
    // 增加数据
      DB.add({
        data:({
          name: name,
          age: age
          }
         ),
        success: function (res) {
          console.log("这 添加成功了")
        },
        fail: function (res) {
          console.log("添加失败")
         },
        complete: function (res) { },
      })
  },
// 查询数据
  search() {
    DB.doc(id).get({
      success:function(){
        console.log(e)
      }
    })
  },
  // 修改数据
  update() {
    DB.doc(id).update({
      data:{
        name:"肉哥",
        age:20
      },
      success: function () {
        console.log("修改成功")
      }
    })
  },
  // 删除数据
  del: function () {
    DB.doc(id).remove({
      success: function () {
        console.log("删除成功")
      }
    })
    console.log(id)

  },

})
