define(function () {

    var emptyString = "";

    return {
        loginUrl: '',
        like: 'Like',
        reply: 'Reply',
        isLoggedin: 'No',
        likedColor: '#eb34e8',
        cmt_warning: 'Please write the comment.',
        exist_email_warning: 'This email is exist. Please Login ',
        login_warning: 'You are not logged in.',
        comment_approve: 'Your comment has been sent successfully. Please wait admin approve ',
        changeUrl: function (value) {
            this.loginUrl = value
        },
        changeLike: function (value) {
            this.like = value
        },
        changeReply: function (value) {
            this.reply = value
        },
        changeIsLoggedin: function (value) {
            this.isLoggedin = value
        },
        changelikedColor: function (value) {
            this.likedColor = value
        },
        changecmt_warning: function (value) {
            this.cmt_warning = value
        },
        changeexist_email_warning: function (value) {
            this.exist_email_warning = value
        },
        changelogin_warning: function (value) {
            this.login_warning = value
        }, changecomment_approve: function (value) {
            this.comment_approve = value
        }

    }
})