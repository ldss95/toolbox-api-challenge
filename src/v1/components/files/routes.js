import { Router } from 'express'

import controller from './controller.js'
const router = Router()

router.get('/data', controller.getData)
router.get('/list', controller.getList)

export default router
