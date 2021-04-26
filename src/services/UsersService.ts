import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    async create(email: string){ //o email criado dentro do parênteses substitui a interface do arquivo SettingsService
        const usersRepository = getCustomRepository(UsersRepository);

        //Verificar se usuário existe
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        //Se existir, retornar user
        if (userAlreadyExists) {
            return userAlreadyExists;
        }
        
        //Se não existir salvar no banco de dados
        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);
        return user;

    }
}

export { UsersService };