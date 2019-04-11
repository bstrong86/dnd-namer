// const axios = require('axios')

module.exports = {

    getFirstName: async (req, res) => {
        console.log('get first name')
        const db = req.app.get('db')
        let id = Math.floor(Math.random()*(1-18)+18)
        console.log(id)
        let firstName = await db.get_first_name({id})
        res.status(200).send(firstName)
    },

    getLastName: async (req, res) => {
        console.log('get last name')
        const db = req.app.get('db')
        let last_name_id = Math.floor(Math.random()*(1-20)+20)
        let lastName = await db.get_last_name({last_name_id})
        res.status(200).send(lastName)
    },

    getDescriptor: async (req, res) => {
        console.log('get descriptor')
        const db = req.app.get('db')
        let descriptor_id = Math.floor(Math.random()*(1-18)+18)
        let descriptor = await db.get_descriptor({descriptor_id})
        res.status(200).send(descriptor)
    }
        
}