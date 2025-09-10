const express = require('express')
const router = express.Router()

// Home page route.
router.get('/', (req, res) => {
	res.status(200).send('Page in working!')
})

module.exports = router
