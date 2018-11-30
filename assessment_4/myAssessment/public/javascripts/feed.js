// This file will contain all of the client side JavaScript code that we will use to make asynchronous calls to our server side APIs
// 该文件将包含我们将用于对服务器端API进行异步调用的所有客户端JavaScript代码

// $(document).ready: This event fires when the document has finished loading
$(document).ready(
    // if you register an event handler the container will invoke it and run whatever is in it
    // 如果您注册一个事件处理程序，容器将调用它并运行其中的任何内容
    function () {
        var totalCharacters = 280;
        // #postForm is textarea's id
        $("#inputPost").keyup(function (event) {
            var inputText = event.target.value;
            // Register event handler which "on key released" manipulates a certain part of the DOM
            // to show the characters remaining
            // 注册事件处理程序“on key released”操纵DOM的某个部分以显示剩余的字符
            // #charRemaining is label's id
            $("#charRemaining").html(totalCharacters - inputText.length);
        });
        // invokes get comments
        getComments();

        /**
         * When the page loads (or is refreshed) we request all comments from the server
         * 当页面加载（或刷新）时，我们请求来自服务器的所有Comments
         */

        /**
         * jQuery provides an $.ajax method to make HTTP requests. 
         * It can be used for any type any type GET, POST, DELETE, PUT…
         * Event handler for when the user deletes a comment
         */
        function getComments() {
            $.ajax({
                url: '/getComments/',
                type: 'GET',
                success: function (data) {
                    // Do something...
                    var posts = "";
                    for (var i = 0; i < data.length; i++) {
                        posts += "<div class='row justify-content-md-center pt-4'>"
                            + "<div class='card col-md-6'>"
                            + "<div class='row'>"

                            // for data[i].message
                            + "<div class='col-md-9'>"
                            + data[i].message
                            + "</div>"

                            // for delete button
                            // + "<div class='col-md-3'>"
                            // + "<button type='button' id='delete' name='" + data[i]._id
                            // + "'class='btn btn-danger'>"
                            // + "Delete</button>"
                            // + "</div>"

                            + "</div>"
                            // for "<div class='row'>"
                            + "<div class='row'>"

                            // for heart icon button
                            + "<div class='col-md-3'>"
                            + "<button class='btn' type='button' value='" + data[i]._id + "'>"
                            + "<span style='color: Tomato;'>"
                            + "<i class='far fa-thumbs-up'></i>"
                            + "</span>"
                            + data[i].upVotes
                            + "</button>"
                            + "</div>" // end heart icon

                            // for downvote icon Dodgerblue
                            + "<div class='col-md-3'>"
                            + "<button  class='btn'  type='button' title='" + data[i]._id + "'>"
                            + "<span style='color: Dodgerblue;'>"
                            + "<i class='far fa-thumbs-down'></i>"
                            + "</span>"
                            + data[i].downVotes
                            + "</button>"
                            + "</div>"

                            // for delete icon Dodgerblue
                            + "<div class='col-md-3'>"
                            + "<button type='button' id='delete1' name='" + data[i]._id + "'class='btn'>"
                            + "<i class='far fa-trash-alt'></i>"
                            + "</button> "
                            + "</div>"

                            + "</div>" // for "<div class='row'>"

                            + "</div>" // for "<div class='card col-md-6'>"
                            + "</div>"; // for "<div class='row justify-content-md-center pt-4'>"
                    }
                    $("#feedPosts").html(posts);
                }
            }); // end $.ajax
            // Recursively call getComments every 10 second 每隔10s调用一次getComments
            setTimeout(getComments, 20000);
            console.log("run getComments function each 20s");
        } // end function getComments()

        /**
         * Event handler for when the user posts a comment
         * Posting a comment to the server
         */
        $("#postBtn").click(function (event) {
            console.log(event.target.id);
            $.ajax({
                url: '/addComment/',
                type: 'POST',
                // Hardcoding in userid to match our existing schema
                // 所有更新的comment的userid都是Weichen
                data: { userid: "Weichen", message: $('#inputPost').val() },
                success: function (data) {
                    // Calling getComments, to refresh the feed, once the call returns
                    getComments();
                }
            });
        });


        /**
         * Event handler for when the user deletes a comment
         * When i click anywhere in the feed page, 在console内会响应undefine
         * When I click Delete button,在console内会响应button的name值
         * 
         * The event object will contain information about the element that raised the event. 
         * When you click the delete button, that becomes the element that raised the event. 
         * So attributes such as name and its corresponding value can be found in the event object
         * 事件对象将包含有关引发事件的元素的信息。
         * 单击删除按钮时，它将成为引发事件的元素。 因此，可以在事件对象中找到名称及其对应值等属性
         */
        $("#feedPosts").click(function (event) {
            // name is Delete button name in feed.hbs. console.log(): helps with debugging
            console.log(event.target.name);
            // name: if undefined this will  evaluate to being false 如果没有其他属性定义了名称，则会失败！
            if (event.target.name) {
                if (confirm('Are you sure you want to delete this?')) {
                    // do something
                    $.ajax({
                        // event.target.name: append the doc id to the url 将doc id附加到url
                        url: '/removeComment/' + event.target.name,
                        type: 'DELETE',
                        success: function (result) {
                            // reload comments
                            // alert("balabala");
                            getComments();
                        }
                    });
                }
            }
            // for upvoteComment API , value = data[i]._id 
            console.log(event.target.value);
            if (event.target.value) {
                $.ajax({
                    url: '/upvoteComment/' + event.target.value,
                    type: 'PUT',
                    success: function (result) {
                        getComments();
                    }
                });
            }
            // for downvoteComment API, title = data[i]._id
            console.log(event.target.title);
            if (event.target.title) {
                $.ajax({
                    url: '/downvoteComment/' + event.target.title,
                    type: 'PUT',
                    success: function (result) {
                        getComments();
                    }
                });
            }

        });
    } // end function()
); // end $(document).ready



