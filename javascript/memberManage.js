function button() {
    alert("저장되었습니다.");
}

function logout() {
    logout = confirm("로그아웃하시겠습니까?");
    if (logout == true) {
        // <a href="myProfile_logout.html" target="_self"></a>
        window.location.href='myProfile_logout.html';
    }
    else {}
}

function withdrawal() {
    withdrawal = confirm("탈퇴하시겠습니까?");
    if (withdrawal == true) {
        window.location.href='myProfile_logout.html';
    }
    else {}
}
