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
import {Assinatura} from '../models';
import {AssinaturaRepository} from '../repositories';

export class AssinaturaController {
  constructor(
    @repository(AssinaturaRepository)
    public assinaturaRepository : AssinaturaRepository,
  ) {}

  @post('/assinaturas')
  @response(200, {
    description: 'Assinatura model instance',
    content: {'application/json': {schema: getModelSchemaRef(Assinatura)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Assinatura, {
            title: 'NewAssinatura',
            exclude: ['AssinaturaID'],
          }),
        },
      },
    })
    assinatura: Omit<Assinatura, 'AssinaturaID'>,
  ): Promise<Assinatura> {
    return this.assinaturaRepository.create(assinatura);
  }

  @get('/assinaturas/count')
  @response(200, {
    description: 'Assinatura model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Assinatura) where?: Where<Assinatura>,
  ): Promise<Count> {
    return this.assinaturaRepository.count(where);
  }

  @get('/assinaturas')
  @response(200, {
    description: 'Array of Assinatura model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Assinatura, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.where(Assinatura) where?: Filter<Assinatura>,
  ): Promise<Assinatura[]> {
    return this.assinaturaRepository.find(where);
  }

  @get('/assinaturas/{id}')
  @response(200, {
    description: 'Assinatura model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Assinatura, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Assinatura, {exclude: 'where'}) filter?: FilterExcludingWhere<Assinatura>
  ): Promise<Assinatura> {
    return this.assinaturaRepository.findById(id, filter);
  }

  @put('/assinaturas/{id}')
  @response(204, {
    description: 'Assinatura PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() assinatura: Assinatura,
  ): Promise<void> {
    await this.assinaturaRepository.replaceById(id, assinatura);
  }

  @del('/assinaturas/{id}')
  @response(204, {
    description: 'Assinatura DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.assinaturaRepository.deleteById(id);
  }
}
