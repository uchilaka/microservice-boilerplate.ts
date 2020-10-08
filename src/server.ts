import factoryInstance from './factory'

const APP_PORT: number = Number(process.env.PORT ?? 3020)

factoryInstance.listen(APP_PORT, '0.0.0.0', (err, address) => {
  if (err) {
    factoryInstance.log.error(err)
    process.exit(1)
  }

  factoryInstance.log.info(`server listening on ${address}`)
})

export default factoryInstance

