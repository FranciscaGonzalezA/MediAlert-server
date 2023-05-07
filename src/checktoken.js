const { admin } = require('./firebase');

module.exports = async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = await admin.auth().verifyIdToken(token);        
        return {token: 'válido'};
    } catch (error) {
        res.code(401).send({token: 'inválido'});
    }
};