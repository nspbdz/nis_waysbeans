const { Router } = require("express");

// Controller
const {housesFilter,getHousesParam,updateHouse,getHouses,getHouse,createHouse,deleteHouse} = require("../controllers/houses")
const { register, signin,checkAuth } = require('../controllers/auth')
const { users, Profile, updateUser,deleteUser } = require('../controllers/user')
const { createTransaction,StatusUpdate,updateTransaction,getTransaction,getAllTransaction,transactionId } = require('../controllers/transaction')
const { getCity } = require('../controllers/city')
const { getProducts,getProduct,createProduct } = require('../controllers/product')

// Middleware 
// const { auth } = require('../middlewares/auth')
const { auth,authentication } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/uploadFile')

const router = Router();
router.get('/products', getProducts)
router.get("/product/:id", getProduct)
// router.post("/product", uploadFile("imageFile"), createProduct, )
router.post("/product", authentication,uploadFile("imageFile"), createProduct, )


router.post('/register', register)
router.post('/login', signin)

// router.get('/users', auth, users) // dengan token
router.get('/users', users)
// router.get('/my-profile', auth, myProfile)
router.get('/user/', authentication, Profile) 
router.patch('/user', auth, uploadFile("imageFile"), updateUser)
// router.delete('/user/:id',deleteUser)
router.get("/check-auth", auth, checkAuth);

// housesFilter
// router.get("/house", getHousesParam)
router.get("/house", housesFilter)
router.get("/houses", getHouses)
router.get("/house/:id", getHouse)
router.post("/house", uploadFile("imageFile"), createHouse, )
router.delete("/house/:id", deleteHouse)

// router.put("/house/:id", updateHouse, uploadFile("imageFile"))
router.patch("/house/:id", uploadFile("imageFile"), updateHouse)

router.post("/transaction", authentication, createTransaction)
// router.post("/transaction", auth, createTransaction)
// router.post("/transaction",  createTransaction)
// router.patch("/updatetransaction/:id", auth,uploadFile("imageFile"), updateTransaction)
router.patch("/updatetransaction/:id", uploadFile("imageFile"), updateTransaction)
router.put("/updatetransacti/:id", StatusUpdate)
// updateTransaction
router.get("/transaction/:id", getTransaction)
router.get("/transactions", getAllTransaction)
router.get("/transaction", transactionId)

router.get("/citys", getCity)

// transactionId

module.exports = router;
