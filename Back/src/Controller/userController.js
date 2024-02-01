const User = require('../Model/user');
const jwt = require('jsonwebtoken');
var CryptoJS = require('crypto-js');
require('dotenv').config();

class UserController {
    static async register(req, res) 
    {
        var bytes = CryptoJS.AES.decrypt(req.body.jsonCrypt, process.env.SECRET);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        const json = JSON.parse(decrypted);

        const { name, email, password, isAdm } = json;

        if(!name)
            return res.status(400).json({ message: "O nome é obrigatório." });
        if(!email)
            return res.status(400).json({ message: "O email é obrigatório." });
        if(!password)
            return res.status(400).json({ message: "A senha é obrigatória." });

        const userExists = await User.findOne({ email: email });

        if(userExists)
            return res.status(422).json({ message: "Usuário já existe, tente novamente" });

        const passwordCrypt = CryptoJS.AES.encrypt(password, process.env.SECRET).toString();

        const user = new User({
            name: name,
            email: email,
            password: passwordCrypt,
            isAdm: true,
            createdAt: Date.now(),
            updatedAt: Date.now(),
            deletedAt: null
        });

        try {
            await User.create(user);
            res.status(201).send({ message: "Usuário cadastrado com sucesso." })
        } catch (error) {
            res.status(500).send({ message: "Algo falhou,", data: error.message })
        }
    }
}

module.exports = UserController;