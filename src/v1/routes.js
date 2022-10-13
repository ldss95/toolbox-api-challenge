import { Router } from 'express'
import swaggerUI from 'swagger-ui-express'

import { specsV1 } from './swaggerJsDoc.js'
import filesRoutes from './components/files/routes.js'

const router = Router()
router.use('/files', filesRoutes)

// Documentacion Swagger
router.use('/docs', swaggerUI.serve, swaggerUI.setup(specsV1))

export default router
