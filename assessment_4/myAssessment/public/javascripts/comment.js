//  post button function
function post() {
    var username, comment, handleComment; // declare variables
    var date = getTime(); //declare variable date to call the getTime() function to setting the date output type.

    // val() 方法返回或设置被选元素的值。
    // The val() method returns or sets the value attribute of the selected elements.
    username = $('#username').val();
    comment = $('#commentArea').val();

    handleComment = "<b>Handle: @</b>" + ("<b>" + username + "</b>") + "<br>" + "<b>Comment: </b>"
        + ("<b>" + comment + "</b>") + "<br>" + "<b>Time: </b>" + ("<b>" + date + "</b>") + "<br></br>";

    // setting if else condition statement for check username and comments that whether is empty
    if (username == "") {
        alert("Please enter your username.");
        return false;
    } else {
        if (comment == "") {
            alert("Please enter your comments.");
            return false;
        } else {
            // 创建指定文本的按钮你需要在按钮元素后添加文本节点: 
            // HTML elements often contains text. To create a button with text you must also create a Text Node which you append to the <button> element:
            var likeBtn = document.createElement("button"); // create a <buttom> element
            var likeTxt = document.createTextNode("Like"); // create a text node (Like).
            // appendChild() 方法在节点的子节点列表末添加新的子节点。
            likeBtn.appendChild(likeTxt); // Append the text to <button>.
            likeBtn.setAttribute('onclick', 'likeFunction()'); // set attribute onclick for like button
            likeBtn.setAttribute('class', 'btn btn-danger'); // set like button theme

            // append() 方法在被选元素的结尾插入指定内容。
            // The append() method inserts specified content at the end of the selected elements.
            $('#commentBlock').append(handleComment); // Append the handleComment to id = commentBlock
            $('#commentBlock').append(likeBtn); // Append the likeBtn to id = commentBlock
            $('#commentBlock').append("<br></br>"); // Append the <br></br> tag line break to id = commentBlock.
            document.getElementById("commentBox").reset(); //  Clear
            console.log("username and commentArea clear.");
        }
    }
}
// get current time function and setting design
function getTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10) ? '0' + month : month;
    var day = date.getDate();
    var hours = date.getHours();
    hours = (hours < 10) ? '0' + hours : hours;
    var min = date.getMinutes();
    min = (min < 10) ? '0' + min : min;
    date = year + '-' + month + '-' + day + " " + hours + ':' + min;
    return date;
}

var totalLike = 0; // declare variable totalLike and Initialise
// Like click times function
function likeFunction() {
    totalLike += 1; // global variable
    alert("Total likes is : " + totalLike); // alert pop up show the total number of likes so far.
    console.log("Total likes add 1");
    return totalLike; // 返回值
}

// get username and commentArea content
// The getElementById() method returns the element that has the ID attribute with the specified value. 返回具有指定值的ID属性的元素。
// commentArea is id in comment.hbs files
// function post() {
//     var comment = document.getElementById("commentArea").value;
//     var username = document.getElementById("username").value;
//     var date = getTime(); // call the getTime() method and run the method code

//     var likeButton = document.getElementById("button2");
//     var listComment = document.getElementById("listComment1");

//     var handleComment = "Handle: @" + username + "<br>" + "Comment: " + comment + "<br>" + date + "<br></br>";
//     // 我们可以通过document.getElementById('listComment').innerHTML 来获取id为listComment的对象的内嵌内容；
//     // 也可以对某对象插入内容，如 document.getElementById('listComment').innerHTML= handleComment / '这是被插入的内容或对象';
//     // invoking this function from HTML. 
//     document.getElementById("listComment1").innerHTML += handleComment;
// }
