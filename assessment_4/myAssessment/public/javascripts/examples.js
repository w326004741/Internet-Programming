// // document ready function
// // 在尝试运行jQuery函数之前允许网页完全加载很重要
// // 加载DOM时（即您的网页已完全加载），就会发生就绪事件
// // 因为这是在DOM准备好之后发生的，所以它是放置jQuery代码的好地方。
// // $(document).ready(function () {
// //     // id of the button.  button的Id
// //     $("#button1").click(function () {

// //         // $("p"): All <p> elements on the page 页面上的所有<p>元素
// //         $("p").slideToggle(); // slideToggle:  jQuery function which toggles visibility 
// //         // and adds simple sliding animation

// //     });
// // });

// function post() {
//     // if (username == '' || username == undefined || username == null) {
//     //     alert("Please enter your username!");
//     //     return false;
//     // }
//     // else {
//     //     if (comment == null) {
//     //         alert("Please enter you comment");
//     //         return false;
//     //     } else {
//     //                }
//     // }

//     // get username and commentArea content
//     // The getElementById() method returns the element that has the ID attribute with the specified value. 返回具有指定值的ID属性的元素。
//     // commentArea is id in comment.hbs files
//     var comment = document.getElementById("commentArea").value;
//     var username = document.getElementById("username").value;

//     var date = getTime(); // call the getTime() method and run the method code

//     var listComment = document.getElementById("listComment");
//     var handleComment = "Handle: @" + username + "<br>" + "Comment: " + comment + "<br>" + date + "<br></br>";
//     // 我们可以通过document.getElementById('listComment').innerHTML 来获取id为listComment的对象的内嵌内容；
//     // 也可以对某对象插入内容，如 document.getElementById('listComment').innerHTML= handleComment / '这是被插入的内容或对象'; 
//     document.getElementById("listComment").innerHTML += handleComment;



// }
// // get current time function and setting design
// function getTime() {
//     var now = new Date();
//     var year = now.getFullYear();
//     var month = now.getMonth() + 1;
//     month = (month < 10) ? '0' + month : month;
//     var day = now.getDate();
//     var hours = now.getHours();
//     hours = (hours < 10) ? '0' + hours : hours;
//     var min = now.getMinutes();
//     min = (min < 10) ? '0' + min : min;
//     now = year + '-' + month + '-' + day + " " + hours + ':' + min;
//     return now; // 返回值
// }

// var totalLike = 0; // declare variable totalLike and Initialise
// // Like click times function
// function likeFunction() {
//     totalLike += 1;
//     alert("Total like is : " + totalLike);
//     return totalLike; // 返回值
// }

// // function likeFunction(totoalLike) {
// //     totoalLike += 1;
// //     // return like;
// //     alert("Total likes : " + totoalLike);
// //     return false;
// // }

