const SECRET = 'c1b0f55c-8254-4a0b-8789-d780b25a060e';


const jwt = require('jsonwebtoken');


exports.auth = (req, res, next) => {
    const token = req.header('X-Authorization');

    if(token) {
        try{
            const decodedToken = jwt.verify(token, SECRET);

            res.user = decodedToken;

            next();
        } catch(err) {
            res.status(401).json({
                message: 'You are not authorized!';
            })
        } 
    } else {
        next();
    }
};