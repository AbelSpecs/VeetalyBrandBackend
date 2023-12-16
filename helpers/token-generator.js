const jwt = require('jsonwebtoken');

const jwtGenerator = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = {uid};
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn: '1h'
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No cannot create token');
            }
            else{
                resolve(token);
            }
        })
    })
}

module.exports = jwtGenerator;