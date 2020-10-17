import cors from 'fastify-cors'
import middie from 'middie'
import fastify, { FastifyInstance } from 'fastify'
import hoistRoutes from './routes'
import routesPlugin from './plugin.routes'

const instance: FastifyInstance = fastify({ logger: true, })

hoistRoutes(instance)

instance.register(cors, {
  origin: [/(\.)?larcity\.(com|dev|local)(:3030)?$/, /(\.)?lar\.city$/,],
  // origin: (origin, cb) => {
  //   console.debug('cors::', { origin })
  //   cb(null, true)
  //   return
  // },
  methods: ['GET', 'POST',],
})

export const setup = async (): Promise<FastifyInstance> => {
  await instance.register(middie)
  instance.register(routesPlugin, { prefix: '/v2', })
  return instance
}

export default instance

