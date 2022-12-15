const mongoose = require ('mongoose');
const userSchema = require('./userSchema');

const trocaTrocaSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "user"
    },
    nome: {
        type: String,
        required: true
    },
    telefone:{
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
       type:[String],
       default:[] 
    },

    preciso_de:{
        type:[String],
        default:[]
    }


          
    
        
}, {timestamp: true})

module.exports = mongoose.model("trocaTroca", trocaTrocaSchema);