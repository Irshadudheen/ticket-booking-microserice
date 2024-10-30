import {model,Model,Document,Schema} from 'mongoose';


interface UserAttrs {
 
    email:string,
    password:string,
}

interface UserModel extends Model<UserDoc>{
    build(attrs:UserAttrs):UserDoc;
}

interface UserDoc extends Document{
    email:string,
    password:string,
}

const userScheema = new Schema({
  
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});


userScheema.statics.build = (attrs:UserAttrs)=>{
    return new User(attrs)
}

const User = model<UserDoc,UserModel>('User',userScheema)
export { User };