
const router = require('express').Router()
const Pinata = require('../models/Pinata')

/*
    Get Pinata
    Create Pinata
 */

// localhost:3000/api/pinatas/

router.get('/getAllPinatas', async (req, res) => {
    await Pinata.find({}).then((pinatas) => {
        res.status(200).json({
            data: pinatas
        })
    })
})

router.post('/newPinata', async (req, res) => {

    const newPinata = new Pinata(req.body)

    try {
        const savedPinata = await newPinata.save()
        res.status(200).send({
            data: savedPinata
        })
    } catch (e) {
        res.status(400).send({
            message: e
        })
    }

})

module.exports = router;