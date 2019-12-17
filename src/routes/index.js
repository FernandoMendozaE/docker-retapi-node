const { Router } = require('express') // crear rutas
const router = Router()

/**
 * Creando rutas
 */
router.get('/', (req, res) => res.json({ message: 'Hello world' }))

module.exports = router
