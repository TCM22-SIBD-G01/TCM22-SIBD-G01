import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import { Viagem } from '../models';
import { ViagemRepository } from '../repositories';

export class ViagemController {
  constructor(
    @repository(ViagemRepository)
    public viagemRepository: ViagemRepository,
  ) { }

  @post('/viagens')
  @response(200, {
    description: 'Viagem model instance',
    content: { 'application/json': { schema: getModelSchemaRef(Viagem) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Viagem, {
            title: 'NewViagem',
            exclude: ['ViagemID'],
          }),
        },
      },
    })
    viagem: Omit<Viagem, 'ViagemID'>,
  ): Promise<Viagem> {
    return this.viagemRepository.create(viagem);
  }

  @get('/viagens/count')
  @response(200, {
    description: 'Viagem model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(Viagem) where?: Where<Viagem>,
  ): Promise<Count> {
    return this.viagemRepository.count(where);
  }

  @get('/viagens')
  @response(200, {
    description: 'Array of Viagem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Viagem, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.where(Viagem) where?: Filter<Viagem>,
  ): Promise<Viagem[]> {
    return this.viagemRepository.find(where);
  }


  @get('/viagens/{id}')
  @response(200, {
    description: 'Viagem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Viagem, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Viagem, { exclude: 'where' }) filter?: FilterExcludingWhere<Viagem>
  ): Promise<Viagem> {
    return this.viagemRepository.findById(id, filter);
  }

  @put('/viagens/{id}')
  @response(204, {
    description: 'Viagem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() viagem: Viagem,
  ): Promise<void> {
    await this.viagemRepository.replaceById(id, viagem);
  }

  @del('/viagens/{id}')
  @response(204, {
    description: 'Viagem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.viagemRepository.deleteById(id);
  }


}
