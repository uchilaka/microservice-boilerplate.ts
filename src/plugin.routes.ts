import { FastifyPluginAsync, RouteShorthandOptions } from 'fastify'

const simpleOption: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'string',
      },
    },
  },
}

const routesPlugin: FastifyPluginAsync = async fastify => {
  fastify.get('/health', simpleOption, async (_, reply) => {
    await reply.send('OK')
  })
}

export default routesPlugin
