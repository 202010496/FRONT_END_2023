function logout(){
    $.ajax({
        type: '',
        url: '',
        contentType: '',
        success: function(data){
            alert('로그아웃 성공');
            location.href="/";
            
        }, error: function(){
            alert('로그인에 실패했습니다.');
        }
    })
}