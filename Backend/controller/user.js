const User = require('../model/user');
const bcrypt = require('bcryptjs');

const getAllUser = async (req,res,next)=>{

    //    const users = await User.find({})
    //    return res.json(users);
    // console.log("hii");

    let users;
    try {
    
        users = await User.find({});

        
    } catch (error) {
    
        console.log(error)
        
    }
    if(!users){
        return res.status(404),json({message:" No user found"})
    }
    
    return res.status(200).json({users});
    
    }



    // create new user

    const signup = async (req,res,next) =>{
        const { name, email, password } = req.body;
        
        let existingUser;

        try {
            existingUser = await User.findOne({email});
        } catch (error) {
            console.log(error);   
        }
        if(existingUser){
            return res.status(400).json({message:"User Already Exists! Login Instead"}); 
        }

        const hashedPassword = bcrypt.hashSync(password);

        const user = new User({
            name,
            email,
            password:hashedPassword,
            blogs:[],
        });

        try{
            await user.save();
        }catch(err){
            console.log(err);
        }
        return res.status(201).json({user});
    }

    // login

    const login = async (req,res,next) =>{
        const { email, password } = req.body;

        let existingUser;

        try {
            existingUser = await User.findOne({email});
        } catch (error) {
            console.log(error);   
        }
        if(!existingUser){
            return res.status(404).json({message:" Couldnt found user !!!"}); 
        }

        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

        if(!isPasswordCorrect){
            return res.status(400).json({message:"Increaditial Error"})
        }
        return res.status(200).json({message:"Login Successfull",user:existingUser})

    }
    
     

    
    module.exports = {getAllUser,signup,login };