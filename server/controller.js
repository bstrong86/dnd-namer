const axios = require('axios')

module.exports = {

    getFirstName: async (req, res) => {
        console.log('get first name')
        const db = req.app.get('db')
        let id = Math.floor(Math.random()*(1-18)+18)
        let firstName = await db.get_first_name({id})
        res.status(200).send(firstName[0].first_name)
    },

    getLastName: async (req, res) => {
        console.log('get last name')
        const db = req.app.get('db')
        let last_name_id = Math.floor(Math.random()*(1-20)+20)
        let last_name = await db.get_last_name({last_name_id})
        res.status(200).send(last_name[0].last_name)
    },

    getDescriptor: async (req, res) => {
        console.log('get descriptor')
        const db = req.app.get('db')
        let descriptor_id = Math.floor(Math.random()*(1-18)+18)
        let descriptor = await db.get_descriptor({descriptor_id})
        res.status(200).send(descriptor[0].descriptor)
    },

    getClass: async (req, res) => {
        console.log('getClass function')
        let id = Math.floor(Math.random()*(1-12)+12)
        console.log(id)
        let charClass = await axios.get(`http://dnd5eapi.co/api/classes/${id}`)
        console.log(charClass.data.name)
        res.status(200).send(charClass.data.name)
    },

    saveInfo: async (req, res) => {
        const {firstName, lastName, descriptor} = req.body
        const {session} = req
        let character = {firstName, lastName, descriptor}
        session.character = character
        res.status(200).send(session.character)

    },

    getNames: async (req, res) => {
        console.log(req.query)
        let names = await axios.db.all_names()
        res.status(200).send(names)
    }
        
}