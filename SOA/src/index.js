const express = require('express');

const axios = require('axios');

const app = express();

const PORT = 3000;

app.get("/cep/cep", async(req,res)=>{
    const{ cep } = req.params;

    try {
        const reponse = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

        const endereço = reponse.data;
        
        if(endereço.erro){
            return res.status(404).json({mensagem: 'cep nao encontrado'})
        }

        res.json({

                cep: endereço.cep,
                logradouro: endereço.logradouro,
                bairro: endereço.bairro,
                cidade: endereço.cidade,
                estado: endereço.uf

            });
    } catch(error){
        res.status(500).json({mensagem: 'erro ao consultar CEP'})
    }


});


app.listen(PORT,()=>{
    console.log(`servidor rodando em http://localhost/${PORT}`)
})