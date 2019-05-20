mariemoi = {
    emailToken: null,
    
    init(password, wrongPasswordUrl, emailToken) {
        var userPassword = prompt('Mot de passe?');
        if (userPassword != password) {
            window.location.href = wrongPasswordUrl;
        }
        this.emailToken = emailToken;
    },
    
    /**
     * answer looks like this:
     *  {
     *      isComing: true,
     *      names: ['name1', 'name2'],
     *      sleeps: {
     *          friday: false,
     *          saturday: true,
     *          sunday: true,
     *          monday: false
     *      },
     *      song: 'Some dancing song',
     *      moreInfo: 'more info left by the user'
     *  }
     */
    confirm(answer, from, to, subject, callback) {
        Email.send({
            SecureToken : this.emailToken,
            To : to,
            From : from || to,
            Subject : subject,
            Body : JSON.stringify(answer)
        }).then(
            message => function(message) {
                callback && callback(message);
                console.log(message);
            }
        );
    }
}
