import * as mongoose from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import * as uniqueValidator from 'mongoose-unique-validator';

const schema = new mongoose.Schema(
    {
        email: { type: String, required: true, lowercase: true, index: true, unique: true },
        passwordHash: { type: String, required: true },
        confirmed: { type: Boolean, default:false },
        name: {type: String, required: true}
    },
    { timestamps: true }
);

schema.methods.isValidPassword = function isValidPassword(password: any) {
    return bcrypt.compareSync(password, this.passwordHash)
}

schema.methods.setPasswordAndName = function setPassword(password: any, name: any) {
    this.passwordHash = bcrypt.hashSync(password, 10);
    this.name = name;
}

schema.methods.generateJWT = function generateJWT() {
    return jwt.sign(
        {
            email: this.email,
            name: this.name
        },
        process.env.MONGODB_URL
    );
}

schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        name: this.name,
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
}

schema.plugin(uniqueValidator, { message: 'There is already an account linked to this email' });

export default mongoose.model('User', schema);