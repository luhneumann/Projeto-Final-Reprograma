const userSchema = require('../model/userSchema');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password,10)
    req.body.password = hashedPassword

    const emailExists = await userSchema.exists({email:req.body.email})
    if(emailExists){
        return res.status(409).send({
            message: 'Email inserido já consta em nosso cadastro',
        })
    }
    const cpfExists = await userSchema.exists({cpf:req.body.cpf})
    if(cpfExists){
        return res.status(409).send({
            message: 'Cpf inserido já consta no nosso cadastro'
        })
    }

    try {
        const newUser = new userSchema(req.body)
        const savedUser = await newUser.save()

        res.status(201).send({
            message: 'Usuário cadastrado com sucesso',
            savedUser
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message
        })
        
    }    
}


const deletaCadastro = async (req, res) => {
    const {email} = req.query;

    try {
        const cadastroRemovido = await userSchema.deleteOne({email})
             
        res.status(200).json({
            cadastroRemovido,           
            mensagem: "Cadastro removido com sucesso"
        })
        
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }    
}
module.exports = {
    createUser,
    deletaCadastro,
    
}