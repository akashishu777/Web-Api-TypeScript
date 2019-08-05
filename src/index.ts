import * as express from 'express'
import * as path from 'path'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'

import auth from './routes/auth'
import users from './routes/users'
import test from './routes/test'

dotenv.config()

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL);

app.use("/api/auth", auth)
app.use("/api/users", users)
app.use("/api/test", test)

app.get('/*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

process.on('unhandledRejection', (reason: any, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
    // application specific logging, throwing an error, or other logic here
});

app.listen(8080, () => console.log("Running on localhost:8080"))