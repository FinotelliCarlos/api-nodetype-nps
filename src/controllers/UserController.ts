import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
    async create(req: Request,res: Response){
         const {name, email} = req.body;
         
         const usersRepository = getCustomRepository(UsersRepository);

         const usersAlreadyExists = await usersRepository.findOne({
             email
         })
         
         if(usersAlreadyExists){
             return res.status(400).json({
                error: "User Already Exists!",
             })
         }

         const user = usersRepository.create({
            name, email
         })

         await usersRepository.save(user);

         return res.json(user);
    }
}

export { UserController };
