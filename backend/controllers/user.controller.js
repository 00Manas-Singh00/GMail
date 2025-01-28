import { User } from "../models/user.model"

export const register = async (req, res) => {
    try {
        const { fullname, email, password } = req.body
        if (!fullname || !email || !password) return res.status(400).json({ message: "All fields are required", success: false })
        
        const user = await User.findOne({ email })
        
        if (user) return res.status(400).json({ message: "User already exists with this email", success: false })
        
        await User.create({
            fullname,
            email,
            password: await bcrypt.hash(password, 10)
        })

        return res.status(201).json({message:"Account created successfully", success:true})
    } catch (error) {
        
    }
}