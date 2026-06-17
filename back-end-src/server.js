const express = require("express");
const app = express();

app.use(express.json());

const animais = [
{
    id:1,
    nome:"Thor",
    especie:"Cachorro",
    localizacao:"Goiânia",
    status:"Disponível"
},
{
    id:2,
    nome:"Mia",
    especie:"Gato",
    localizacao:"Anápolis",
    status:"Perdido"
}
];

//Listar todos os animais
app.get("/animais",(req,res)=>{
    res.json(animais);
});

//Cadastrar animal
app.post("/animais",(req,res)=>{

    const novoAnimal = {
        id:animais.length+1,
        nome:req.body.nome,
        especie:req.body.especie,
        localizacao:req.body.localizacao,
        status:req.body.status
    };

    animais.push(novoAnimal);

    res.status(201).json(novoAnimal);

});

app.listen(3000,()=>{
    console.log("Servidor executando na porta 3000");
});
