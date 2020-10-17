import factoryInstance, { setup } from './factory'

const APP_PORT = Number(process.env.PORT ?? 3020)

setup().then(instance => {
  instance.listen(APP_PORT, '0.0.0.0', (err, address) => {
    if (err) {
      instance.log.error(err)
      process.exit(1)
    }

    instance.log.info(`server listening on ${address}`)
  })
}).catch(err => {
  factoryInstance.log.error(err)
  process.exit(1)
})

export default factoryInstance

