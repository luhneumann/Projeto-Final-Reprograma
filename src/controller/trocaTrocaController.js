const trocaTrocaSchema = require('../model/trocaTrocaSchema');

const novaTroca = async (req, res) => {
    try {
        const {
            nome,
            userId,
            telefone,
            endereco,
            para_doar,
            preciso_de
        } = req.body
        
        const dadosParaTroca = new trocaTrocaSchema({
            nome:nome,
            userId: userId,
            telefone: telefone,
            endereco: endereco,
            para_doar: para_doar,
            preciso_de:preciso_de
        })
    
        const salvarDados = await dadosParaTroca.save();
    
        res.status(201).json({
            cadastro: salvarDados,
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
   
    const { cidade } = req.query
    console.log(req.query)
    try {           
        const buscaCidade = await trocaTrocaSchema.find({
            "endereco.cidade": cidade
        }).populate("userId")
        if (!buscaCidade) {
            return res.status(404).json({
                message: "Não há nenhuma troca disponível nessa cidade"
            })
        }
        res.status(200).json({
            message: "Há trocatroca das gurias na cidade escolhida. Observe a lista a seguir:",
            buscaCidade
                      
        })
               
                
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const buscaDoacoes = async (req, res) => {
    const { para_doar } = req.query
    let query = { }
    if (para_doar) query.para_doar = RegExp(para_doar, 'i')
    
    try {
        const doadoresEncontrados = await trocaTrocaSchema.find(query)  
        if(doadoresEncontrados.length > 0)
            return res.status(200).json({
            doadoresEncontrados
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const buscaQuemPrecisa = async (req, res) => {
    const { preciso_de } = req.query
    
    let query = { }
    if (preciso_de) query.preciso_de = RegExp(preciso_de, 'i')
    
    try {
        const quemPrecisa = await trocaTrocaSchema.find(query)  
        if(quemPrecisa.length > 0)
            return res.status(200).json({
            quemPrecisa
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const atualizaCadastro = async (req, res) => {
    const {
        telefone,
        endereco,
        para_doar,
        preciso_de
    } = req.body

    const {id} = req.params

    try {
        const trocaTroca = await trocaTrocaSchema.findOneAndUpdate({id},{
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




module.exports = {
    novaTroca,
    buscaTodas,
    buscaDoacoes,
    atualizaCadastro,
    buscaPorCidade,
    buscaQuemPrecisa
};


