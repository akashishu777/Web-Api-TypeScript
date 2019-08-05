import * as express from 'express'
import User from '../models/User'
import parseErrors from '../utils/parseErrors'

const router = express.Router();

router.post("/", (req, res) => {
    const { email, password, name } = req.body.user;
    const user: any = new User({ email });
    user.setPasswordAndName(password, name);
    user
      .save()
      .then((userRecord: { toAuthJSON: () => void; }) => {
        res.json({ user: userRecord.toAuthJSON() });
      })
      .catch((err: { errors: any; }) => res.status(400).json({ errors: parseErrors(err.errors) }));
  });

export default router;