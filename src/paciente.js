const { admin } = require('./firebase');

module.exports = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return procesarGET(req, res);
    case 'POST':
      return procesarPOST(req, res);
    case 'PUT':
      return procesarPUT(req, res);
    case 'DELETE':
      return procesarDELETE(req, res);
    default:
      res.code(500).send({ error: 'Método HTTP no soportado!' });
  }
};

function getColeccion() {
  return admin.firestore().collection('pacientes');
}

async function procesarGET(req, res) {
  try {
    const querySnapshot = await getColeccion().get();
    const documentos = querySnapshot.docs.map(d=>{
      return d.data();
    });
    return documentos;
  } catch (error) {
    res.code(500).send({error: error.message});
  }
}

async function procesarPOST(req, res) {
  try {
    const { nombre, fechaIngreso, estado } = req.body;
    const paciente = {
      nombre,
      fechaIngreso,
      estado
    }
    const documento = await getColeccion().doc();
    const id = documento.id;
    documento.set(paciente);
    paciente.id = id;
    return paciente;
  } catch (error) {
    res.code(500).send({error: error.message});
  }
}

async function procesarPUT(req, res) {
  return { m: 'PUT' }
}

async function procesarDELETE(req, res) {
  return { m: 'DELETE' }
}