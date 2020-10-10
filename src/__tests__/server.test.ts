import setupRoutes from '../routes'
import Fastify, { FastifyInstance } from 'fastify'

/**
 * Documentation for LightMyRequest (endpoint testing library): https://github.com/fastify/light-my-request
 */
describe('server', () => {
  let server: FastifyInstance

  const mockServer = () => {
    const instance = Fastify({ logger: false, })
    return setupRoutes(instance)
  }

  beforeEach(() => {
    server = mockServer()
  })

  test('/ping', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await Promise.resolve(server.inject().get('/ping'))
    expect(result.payload).toEqual(JSON.stringify({ pong: 'it worked!', }))
  })

  test('/health', async () => {
    const result = await Promise.resolve(server.inject().get('/health'))
    expect(result.payload).toEqual('OK')
  })
})
