import mongoose, {Document} from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    }
})

interface IUser extends Document{
    email: string,
    password: string,
    confirmPassword: string
}

export default mongoose.model<IUser>("User", userSchema)