const database = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UsuariosController {

  static async listUsers(req, res) {
    try {
      const usersList = await database.Users.findAll();
      return res.status(200).json(usersList);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listUmUsuario(req, res) {
    const { id } = req.params;
    try {
      const listOneUser = await database.Users.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(listOneUser);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createUser(req, res) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.Senha, 10);
      const ConfirmhashedPassword = await bcrypt.hash(
        req.body.ConfirmSenha,
        10
      );
      const newUser = {
        NmUsuario: req.body.NmUsuario,
        Login: req.body.Login,
        Senha: hashedPassword,
        ConfirmSenha: ConfirmhashedPassword,
        CadastradoPor: req.body.CadastradoPor,
        Setor: req.body.Setor,
        StatusUser: req.body.StatusUser,
        DtCadastro: req.body.DtCadastro,
        AlterSenha: req.body.AlterSenha,
      };
      const created = await database.Users.create(newUser);
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async Login(req, res) {
    const Login = req.body.Login;
    const Senha = req.body.Senha;
    try {
      const userBd = await database.Users.findOne({ where: { Login: Login } });
      const passWord = userBd.Senha;
      bcrypt.compare(Senha, passWord, (err, result) => {
        if (err) {
          return res.status(500).json(err.message);
        }
        if (result) {
          const token = jwt.sign({}, "privateKey", { expiresIn: "10h" });
          return res
            .status(200)
            .json({ mensagem: "Autenticado com sucesso!", token: token });
        }
        return res.status(401).json({ mensagem: "Senha invalida!" });
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    try {
      const deleteUser = await database.Users.destroy({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ mensagem: "Usuario deletado com sucesso!" });
    } catch (error) {
      return res.status(404).json({ mensagem: "Usuario não encontrado!" });
    }
  }

  static async profile(req, res){
  const {Login} = req.body
  try {
    const profileUser = await database.Users.findAll({where: {Login: Login}})
    return res.status(200).json(profileUser)
  } catch (error) {
    return res.status(500).json(error)
  }
  }
  
  static async alterPassword(req, res){
    const {Login} = req.body
    const newPassword = await bcrypt.hash(req.body.Senha, 10);
    const confirmPassword = await bcrypt.hash(req.body.ConfirmSenha, 10)
    const newInfos = {
      Senha: newPassword,
      ConfirmSenha: confirmPassword,
      AlterSenha: false
    }
    try {
      await database.Users.update(newInfos, {where: {Login: Login}})
      const atualizado = await database.Users.findOne({where: {Login: Login}})
      return res.status(200).json(atualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}
module.exports = UsuariosController;
