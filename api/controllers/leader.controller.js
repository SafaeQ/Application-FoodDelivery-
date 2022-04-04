const Leader = require('../models/leader.model')

const bcrypt = require('bcryptjs')


const add_new_chefSecteur = async (req, res) => {
    try {
        const user = {name: req.body.name, email: req.body.email, adress: req.body.adress, number: req.body.number, password: req.body.password}
      console.log(user);
        const emailExist = await Leader.findOne({ email: req.body.email });

        if(emailExist) return res.status(400).send("Email Already Exist!");
      console.log('----------');
        const hashedPassword = await bcrypt.hash(password);
  
        const leader = { name, password: hashedPassword, email, adress, number }
// console.log('leader',leader);
        const newLeader = Leader.create({leader})
        
        const result = await newLeader.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const delete_chefSecteur = async (req, res) => {
    try {
        const id = req.params.id

        const user = await Leader.findOneAndDelete(id)

        user.catch((error) => { throw error })

        res.status(200).send('User is deleted')

    } catch (error) {
        
        res.status(400).send(error)
    }
}

module.exports = {
    add_new_chefSecteur, delete_chefSecteur
}