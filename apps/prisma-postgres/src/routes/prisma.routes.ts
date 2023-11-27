import { Router } from "express"
import createCountry from "../controllers/country/createCountry.controller"
const router = Router()

/**
 *  also the crud of all entities are available in controller folder
 *  we add bench mark routes
 *  */
router.post( "/country/create", createCountry )
export default router