const express=require("express");
const router=express.Router()

const DipStockcontroller=require('../controllers/DipStockController')

router.post('/createDipStock',DipStockcontroller.createDipStock)
// module.exports = router;
router.get('/getDipStock',DipStockcontroller.getDipStock)
router.get('/getDipStockById/:id',DipStockcontroller.getDipStockById)
router.put('/updateDipStock/:id',DipStockcontroller.updateDipStock)
router.delete('/deleteDipStock/:id',DipStockcontroller.deleteDipStock)

module.exports = router;                                                