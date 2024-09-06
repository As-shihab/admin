const Connection = require("../config/database")
const jwt = require('jsonwebtoken');


const getstudents = async (req ,res)=>{
    const SQL = "SELECT * FROM `student` ORDER BY id DESC";

    Connection.query(SQL , (err, result)=>{
        if(err) throw new err;
        if(result){
            return res.json({
                code: 200,
                data:result
            })
        }
    })
}
// post students

const createstudents = async (req ,res)=>{
    const SQL ="INSERT INTO `student`( `name`, `email`, `password`) VALUES (? , ? ,?)"
 Connection.query(SQL , [req.body.name, req.body.email, req.body.password] , (err , result)=>{
        if(err) throw new err;

        if(result){
            return res.json({message: "User Created Successfully"})
        }
 })
}

const LoginUser = async (req,res)=>{
const SQL ="SELECT * FROM `student` WHERE `email`=?"
Connection.query(SQL, [req.body.email], (err, result)=>{
    if(err) throw new err;

    if(result){
        return res.json(result)
    }
})

}

const DeleteUser= async(req,res)=>{
const {id} = req.params;
const SQL = "DELETE FROM `student` WHERE `id` = ?";
Connection.query(SQL , [id], (err, result)=>{
    if(err) throw new err;
    if(result){
        return res.json({message:"User Deleted", code:200})
    }
})
}

// get users based on id

const GetUserById = async(req,res) =>{
    const {id} = req.params;
    const SQL ="SELECT * FROM `student` WHERE id= ? ";
    Connection.query(SQL , id ,(err, result)=>{
        if(err) throw new err;
        if(result){
            return res.json({
                code:200,
                data:result
            })
        }
    })

}

const UpdateUser = async = (req ,res)=>{
const {id} = req.params;
const SQL ="UPDATE `student` SET `mobile`=?,`name`=? ,`roll`=?,`email`=? ,`password`=?,`username`=? ,`bio`=? WHERE id=?"
Connection.query(SQL , [req.body.mobile , req.body.name , req.body.roll , req.body.email , req.body.password , req.body.username , req.body.bio , id] , (err, result)=>{
    if(err) throw new err;

    if(result){
        return res.json({
            code: 200 ,
            message:"User Updated successfully"
        })
    }
})
}

module.exports ={getstudents  , createstudents, LoginUser , DeleteUser , GetUserById , UpdateUser}