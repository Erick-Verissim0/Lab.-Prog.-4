import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ClientsRepository } from 'src/domain/repository/clients/clients.interface';
import { Client } from 'src/domain/entities/clients';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/domain/entities/users';
import { PostClientsInterface } from 'src/presentation/interface/clients/post_clients.interface';
import { UsersRepository } from 'src/domain/repository/users/users.interface';

@Injectable()
export class PostClientsUseCase {
  constructor(
    @Inject(ClientsRepository)
    private readonly clientsRepository: ClientsRepository,
    @Inject(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async execute(
    clientData: Partial<Client> & { user_id: number },
  ): Promise<PostClientsInterface | null> {
    try {
      const user = await this.usersRepository.getOneUser(clientData.user_id);

      if (!user) {
        throw new InternalServerErrorException('User not found!');
      }

      if (user.type === 'admin') {
        throw new BadRequestException(
          'Only users of the type "client" can register.',
        );
      }

      const client = await this.clientsRepository.postClient({
        ...clientData,
      });

      if (!client) {
        throw new Error('Client not found!');
      }

      return client;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to create client: ${error.message}`,
      );
    }
  }
}
