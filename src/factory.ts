import cors from 'fastify-cors'
import fastify, { FastifyInstance } from 'fastify'
import hoistRoutes from './routes'

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

export default instance

