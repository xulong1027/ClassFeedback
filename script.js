// 获取元素
var txt = document.querySelector("textarea");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");

// 给button绑定点击事件
btn.onclick = function () {
  if (txt.value == "") {
    alert("您没有输入内容");
  } else {
    // 创建元素li作为留言区
    var li = document.createElement("li");
    // 获取当前日期和时间
    var now = new Date();
    var year = now.getFullYear(); // 年份
    var month = now.getMonth() + 1; // 月份是从0开始计算的，因此需要+1
    var day = now.getDate(); // 日
    var hour = now.getHours(); // 时
    var minute = now.getMinutes(); // 分
    var dateStr = `[${year}年${month}月${day}日${hour}:${minute}]`;
    li.innerHTML = `${dateStr} ${txt.value}<a href='javascript:;'><!--删除--></a>`;
    // 将删除按钮添加到li中
    li.innerHTML += `<a href='javascript:;'><!--删除--></a>`;
    txt.value = "";
    // 将留言添加到ul中，而且在最上方
    ul.insertBefore(li, ul.children[0]);
    var as = document.querySelectorAll("a");

    // ********已将删除事件语句注释
    /*
    // 循环给每个删除绑定事件
    for (var i = 0; i < as.length; i++) {
      as[i].onclick = function () {
        // 删除当前a标签所在位置的父节点li
        ul.removeChild(this.parentNode);
      };
    }
*/
  }
};
