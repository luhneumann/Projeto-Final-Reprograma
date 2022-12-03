const trocaTrocaSchema = require('../model/trocaTrocaSchema');

const novoCadastro = async (req, res) => {
    try {
        const {
            nome,
            email,
            telefone,
            endereco,
            para_doar,
            preciso_de
        } = req.body

        
        const cadastro = new trocaTrocaSchema({
            nome:nome,
            email: email,
            telefone: telefone,
            endereco: endereco,
            para_doar: para_doar,
            preciso_de:preciso_de
        })
    
        const salvarCadastro = await cadastro.save();
    
        res.status(201).json({
            cadastro: salvarCadastro,
            mensagem:"cadastro realizado com sucesso"
        })

    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

// const buscaTodas = async (req, res) => {
//     try {
//         const todasUsuarias = await trocaTrocaSchema.find()

//         res.status(200).json({
//             todasUsuarias,
//             message:"Lista de usuárias carregadas com sucesso",
//         })
        
//     } catch (error) {
//         res.status(500).json({
//             mensagem:error.message
//         })
//     }
// }

module.exports = {
    novoCadastro
};


