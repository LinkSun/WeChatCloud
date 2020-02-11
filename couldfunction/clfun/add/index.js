// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // 将传入的 a 和 b 相加并作为 sum 字段返回给调用端
  let a= event.a;
    let b= event.b;
  return a+b;

}