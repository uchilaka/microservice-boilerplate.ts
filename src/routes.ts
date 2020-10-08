import { FastifyInstance } from "fastify";
import { RouteShorthandOptions } from "fastify"

const plainOptions: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'string'
      }
    }
  }
}

const pingPongOptions: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          },
          url: {
            type: 'string'
          },
        }
      }
    }
  }
}

function hoistRoutes(server: FastifyInstance): FastifyInstance {
  server.get('/health', plainOptions, (_, reply) => {
    reply.send('OK')
  })

  server.get('/ping', pingPongOptions, async () => {
    return { pong: 'it worked!' }
  })

  server.get('/', plainOptions, (_, reply) => {
    reply.send('Your microservice is UP! WOOT!! 🙌🏾')
  })

  return server
}

export default hoistRoutes
