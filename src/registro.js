const { admin } = require('./firebase');

module.exports = async (req, res) => {
    const {rut, nombre, apellido, email, contrasena} = req.body;

    try {
        const usuario = await admin.auth().createUser({
            uid: rut,
            displayName: nombre + ' ' + apellido,
            email,
            password: contrasena,
        });
        return usuario;
    } catch (error) {
        res.code(500).send({error: 'Ocurrió un error al crear el usuario'})
    }
}