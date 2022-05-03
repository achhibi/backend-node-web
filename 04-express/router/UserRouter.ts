import express from 'express';
import bcrypt from 'bcryptjs'

const userRouter:express.Router = express.Router();


//logic

/**
 * @usage: usage*
 * @url: url
 */
userRouter.post('/login', async (_request:express.Request, _response: express.Response) => {

  let formData = _request.body;

  //  _response.status(200).json({
  //    msg: 'form data is received ',
  //    data: formData
  //  });

  try {
    let salt = await bcrypt.genSalt(10);

    let hashpassword = await bcrypt.hash(formData.password, salt);

    console.log(hashpassword);

    _response.status(200).end(hashpassword);
  } catch (error) {
    console.log(error);
  }

});
 



export default userRouter;