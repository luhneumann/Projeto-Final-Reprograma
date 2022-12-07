const mongoose = require ('mongoose');

const trocaTrocaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: Number,
        required: true
    },
    endereco:{
        rua: {
            type: String,
            required: true
        },
        numero:{
            type: Number,
            required: true
        },
        bairro:{
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        }
    },
    para_doar:{
        
        fraldas:{
            marca:{
                type: String,
            },
            tamanho:{
                type: String,
            },
        },
        roupas:{
            type: String, 
        }, 
        calcados:{
            tamanho:{
                type: String,
            }
        },   
        acessorios: {
            type: Array,
        },
        brinquedos: {
            type: Array,
        },
        carrinho: {
            type: String,
        }

    },

    preciso_de:{
        fraldas:{
            marca:{
                type: String,
            },
            tamanho:{
                type: String,
            },
        },
        roupas:{
            type: String
        
        }, 
        calcados:{
            tamanho:{
                type: String
            }
        },   
        acessorios: {
            type: Array
        },
        brinquedos: {
            type: Array
        },
        carrinho: {
            type: String
        }

    }
        
}, {timestamp: true})

module.exports = mongoose.model("trocaTroca", trocaTrocaSchema);