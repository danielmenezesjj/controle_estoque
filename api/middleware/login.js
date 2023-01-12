const jwt = require('jsonwebtoken')


module.exports = (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'privateKey')
        req.usuario = decode
        next();  
    } catch (error) {
        return res.status(401).json({mensagem: 'Sem permissão para acessar a rota!'})
    }
}