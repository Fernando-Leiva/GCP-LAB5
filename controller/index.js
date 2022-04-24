const sql = require("../config/config");

const version = (req,res) => {
    return res.status(200).json({version:"1.0.3"})
}

const createUser = (req,res) => {
    const user = [req.body.name, req.body.username,req.body.password,req.body.biografia,req.body.gravatar]

    sql.query("INSERT INTO user (name,username,password,biografia,gravatar) VALUES (?,?,?,?,?)", user ,(err,result)=>{
        if (err) return res.status(500).json({message:err,data:null})
        return res.status(200).json({message:null,data:result})
    })       

}

const getAllUsers = (req,res) => {
    sql.query(`SELECT * FROM user`, (err, result) => {
      if (err) {
       return  res.status(403).json({message:err,data:null})
      }
      
      return res.status(200).json({message:null,data:result})
    })
}
const deleteUser = (req,res) => {
    sql.query("DELETE FROM user WHERE username = ?", req.body.username, (err, result) => {
        if(err) return res.status(500).json({message:err,data:null})
        return res.status(200).json({message:null,data:result})
    })
}

const changePassword = (req,res) => {
    sql.query(`UPDATE user SET password=${req.body.newPassword} WHERE username=${req.body.username}`,(err,result)=>{
        if(err) return res.status(500).json({message:err,data:null})
        return res.status(200).json({message:null,data:result})
    })
}

const loginUser = (req,res) => {
    sql.query(`SELECT * FROM user WHERE username=${req.body.username} && password=${req.body.password}`,(err,result)=>{
        if(err) return res.status(400).json({message:'Error de credenciales',data:null})
        return res.status(200).json({message:'Bienvenido!',data:result}) 
    })
}
const updateUser = (req,res) => {
    let updatedUser
    if(req.body){
        updatedUser = {
            name: req.body.name || '',
            username: req.body.username || '' ,
            password: req.body.password || '',
            biografia: req.body.biografia || '',
            gravatar: req.body.gravatar || ''
        }
    }
   
    sql.query(`UPDATE user SET updatedUser WHERE user=${req.body.logged}`,(err,result)=>{
        if(err) return res.status(500).json({message:err,data:null})
        return res.status(200).json({message:null,data:updatedUser})
    })
}

module.exports = {
    createUser,
    getAllUsers,
    version,
    deleteUser,
    changePassword,
    loginUser,
    updateUser
}