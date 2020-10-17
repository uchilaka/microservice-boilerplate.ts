import cors from 'fastify-cors'
import middie from 'middie'
import fastify, { FastifyInstance } from 'fastify'
import { routesPlugin } from './routes'

const instance: FastifyInstance = fastify({ logger: true, })

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
  /**
   * You can pass a second argument for plugin options to specify route prefix, for example
   * More on plugins: https://www.fastify.io/docs/master/Plugins/
   */
  instance.register(routesPlugin /*, { prefix: '/v2', }*/)
  return instance
}

export default instance

