exports.register = function (req, res) {
    let client = req.db;
    dbName = 'authentication'
    const db = client.db(dbName);
    let userName = req.body.user;
    let password = req.body.password;
    let email = req.body.email;

    console.log("User name = " + userName + ", password is " + password, 'email - ', email);

    let response = {
        success: false,
        username: userName,
        email: email,
        reason: null
    }
    db.collection('users').find({
        email: email
    }).limit(1).toArray(function (err, docs) {
        console.log(docs)
        console.log(docs.length)
        if (docs.length > 0) {
            response.reason = "user already present";
            res.send(response);
        } else {
            let userData = {
                username: userName,
                password: password,
                email: email
            }
            db.collection('users').insertOne(userData, function (err, result) {
                console.log(result.result);
                if (result.result.ok == 1 && result.result.n == 1) {
                    response.success = true;
                    res.send(response);
                } else {
                    res.send(response);
                }
            });
        }
    });


};