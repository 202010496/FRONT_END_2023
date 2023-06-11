function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
var postId = localStorage.getItem('postId');

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/post/detail/' + postId,
        contentType: 'application/json',
        success: function(data){
            $('#postTitle').val(data.post.title);
            $('#postContent').append(data.post.content);
        }
    })
})

function completePost(id){
    var formData = new FormData();
    formData.append('title', $('#postTitle').val());
    formData.append('content', $('#postContent').val());
    $.ajax({
        type: 'PUT',
        url: 'http://127.0.0.1:8000/post/update/' + postId+"/",
        processData: false,
        contentType: false,
        headers: {
            'X-CSRFToken': getCookie('csrftoken')
          },
        data: formData,
        success: function(data){
            alert('글 수정을 완료했습니다.');
            window.location = './post.html';
        }, error: function(){
            alert('글 수정을 실패했습니다!!!!');
        }
    })

    $.ajax({
      type: "POST",
      url: "/likelion.org",
      data: data, //서버로 전달할 데이터
      success: function(arg){
        alert('통신 성공시에만 실행');
      }, error: function(arg){
          alert('통신 실패시에만 실행');
      }
    });
}
function completePost_cbv(){
    $("#form_submit").trigger("click")
}

function completeNewPost(){
  var postTitle = $('#postTitle').val();
  var postContent = $('#postContent').val();

  $.ajax({
      type: 'PUT',
      url: 'http://127.0.0.1:8000/post/update/1',
      contentType: 'application/json',
      data: JSON.stringify({
      }),
      success: function(data){
        alert('수정 완료');
        location.href="./post.html";

      }, error: function(){
        alert('수정 실패');
      }
  })
}

function deletePost(){
  var postId = localStorage.getItem('postId');
  $.ajax({
      type: 'DELETE',
      url: 'https://127.0.0.1:8000/post/delete/1',
      contentType: 'application/json',
      headers: {
        },
      success: function(data){
        alert('삭제 성공');
        location.href="/post/list/cbv";

      },error: function(data){
        alert('삭제 실패');

      }
  })
}