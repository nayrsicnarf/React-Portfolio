export function validateEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}

export function validateMessage(message) {

    const mess = /^[A-za-z0-9]&/;
    return mess.test(String(message));

}

export function validateName(inputName) {

    const inName = /^[A-za-z0-9]{2,40}$/;
    return inName.test(String(inputName));

}