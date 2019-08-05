import * as mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        id: { type: Number, required: true, index: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        topics: [{ name: { type: String, required: true }, questions: { type: Number, required: true } }],
        duration: { type: Number, required: true },
        difficulty: { type: Number, required: true }
    }
);

export default mongoose.model('Test', schema);