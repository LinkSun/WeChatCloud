
Page({
  data:{
    imgUrl:""
  },
  upload(){
// 选择照片
let that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'], //在相册/相机选图片
      success(res) {
       console.log("选中成功",res)
        that.uploadImg(res.tempFilePaths[0])
      },
      fail(res){
        console.log("失败", res)
      }
    })
  },  
  // 上传图片
  uploadImg(imgurl) {
    wx.cloud.uploadFile({
      cloudPath: 'aaa.png', // 上传至云端的路径
      filePath: imgurl, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log(res.fileID)
        // 展示图片在页面
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail: console.error
    })
  }
    
})
