// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// config de fastify cors abreviada
fastify.register(require('@fastify/cors'), {})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.post('/registro', require('./src/registro.js'));
fastify.post('/inicio-sesion', require('./src/inicio-sesion.js'));
fastify.post('/usuario/checktoken', require('./src/checktoken.js'));

fastify.route({
  method: ['GET', 'POST', 'PUT', 'DELETE'],
  url: '/paciente',
  handler: require('./src/paciente')
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()