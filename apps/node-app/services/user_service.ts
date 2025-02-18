import { getRepository } from "typeorm";
import { User } from "../entities/User";

export class UserSevice{

static async createUser(user: User) { 

    const userRepository = getRepository(User);
    const savedUser = await userRepository.save(user);
    return await userRepository.save(user);

    console.log("User has been saved:", user);
}

static async findUserByName(name : string) { 

    const userRepository = getRepository(User);

    const savedUser = await userRepository.findOneBy({name});

    console.log("User has been obtained:", savedUser);
}
}