mariemoi = {
    init(password, wrongPasswordUrl) {
        var userPassword = prompt('Mot de passe?');
        if (userPassword != password) {
            window.location.href = wrongPasswordUrl;
        }
    }
}
