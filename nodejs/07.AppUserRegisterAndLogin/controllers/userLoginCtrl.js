module.exports = function(req, res) {
    let client = req.db;
    dbName = 'authentication'
    const db = client.db(dbName);

    let userData = {
        username: req.body.user,
        password: req.body.password,
        email: req.body.email
    }

    db.collection('users').find(userData).limit(1).toArray(function (err, docs) {
        let response = {
            success: false,
            username: userData.username,
            email: userData.email,
            reason: null
        }
        console.log("data - ", docs)
        console.log("data - ", docs.length);

        if(docs.length === 1 ){
            response.success = true;
            response.id = docs[0]._id
            res.send(response);
        } else {
            response.reason = "no user found"
            res.send(response);
        }
    });
};