import factoryInstance, { setup } from './factory'

const APP_PORT = Number(process.env.PORT ?? 3020)

// factoryInstance.listen(APP_PORT, '0.0.0.0', (err, address) => {
//   if (err) {
//     factoryInstance.log.error(err)
//     process.exit(1)
//   }

//   factoryInstance.log.info(`server listening on ${address}`)
// })

setup().then(factoryInstance => {
  factoryInstance.listen(APP_PORT, '0.0.0.0', (err, address) => {
    if (err) {
      factoryInstance.log.error(err)
      process.exit(1)
    }

    factoryInstance.log.info(`server listening on ${address}`)
  })
}).catch(err => {
  factoryInstance.log.error(err)
  process.exit(1)
})

export default factoryInstance

