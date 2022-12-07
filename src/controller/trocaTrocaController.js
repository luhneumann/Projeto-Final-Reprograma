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

const buscaTodas = async (req, res) => {
    try {
        const todasUsuarias = await trocaTrocaSchema.find()

        res.status(200).json({
            todasUsuarias,
            message:"Lista de usuárias carregadas com sucesso",
        })
        
    } catch (error) {
        res.status(500).json({
            mensagem:error.message
        })
    }
}

const buscaPorCidade = async (req, res) => {
   
    const { endereco } = req.query;   

    try {   
        
        const buscaCidade = await trocaTrocaSchema.find({endereco});
        if(endereco.cidade === req.query)

        console.log(buscaCidade)

        // if (doadores.length > 0)
        // res.status(200).json(doadores);
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizaCadastro = async (req, res) => {
    const {
        email,
        telefone,
        endereco,
        para_doar,
        preciso_de
    } = req.body

    const {id} = req.params

    try {
        const trocaTroca = await trocaTrocaSchema.findOneAndUpdate({id},{
            email,
            telefone,
            endereco,
            para_doar,
            preciso_de
        })    

        await trocaTroca.save()
        res.status(200).json({mensagem: "Cadastro atualizado com sucesso"})

    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        }) 
    }    
}

const deletaCadastro = async (req, res) => {
    const {email} = await req.query

    const cadastro = await trocaTrocaSchema.find({email})
        console.log(cadastro)

    try {
        await cadastro.delete()
      
        res.status(200).json({
            mensagem: "Cadastro removido com sucesso"
        })
        
    } catch (error) {
        res.status(400).json({
            mensagem: error.message
        })
    }    
}


module.exports = {
    novoCadastro,
    buscaTodas,
    // buscaDoador,
    atualizaCadastro,
    deletaCadastro,
    // buscaPorCidade
};


