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
import { CartaoAndante } from '../models';
import { CartaoAndanteRepository } from '../repositories';

export class CartaoAndanteController {
  constructor(
    @repository(CartaoAndanteRepository)
    public cartaoAndanteRepository: CartaoAndanteRepository,
  ) { }

  @post('/cartao-andante')
  @response(200, {
    description: 'CartaoAndante model instance',
    content: { 'application/json': { schema: getModelSchemaRef(CartaoAndante) } },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CartaoAndante, {
            title: 'NewCartaoAndante',
            exclude: ['CartaoID'],
          }),
        },
      },
    })
    cartaoAndante: Omit<CartaoAndante, 'CartaoID'>,
  ): Promise<CartaoAndante> {
    return this.cartaoAndanteRepository.create(cartaoAndante);
  }

  @get('/cartao-andante/count')
  @response(200, {
    description: 'CartaoAndante model count',
    content: { 'application/json': { schema: CountSchema } },
  })
  async count(
    @param.where(CartaoAndante) where?: Where<CartaoAndante>,
  ): Promise<Count> {
    return this.cartaoAndanteRepository.count(where);
  }

  @get('/cartao-andante')
  @response(200, {
    description: 'Array of CartaoAndante model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CartaoAndante, { includeRelations: true }),
        },
      },
    },
  })
  async find(
    @param.where(CartaoAndante) where?: Filter<CartaoAndante>,
  ): Promise<CartaoAndante[]> {
    return this.cartaoAndanteRepository.find(where);
  }

  @get('/cartao-andante/{id}')
  @response(200, {
    description: 'CartaoAndante model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CartaoAndante, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CartaoAndante, { exclude: 'where' }) filter?: FilterExcludingWhere<CartaoAndante>
  ): Promise<CartaoAndante> {
    return this.cartaoAndanteRepository.findById(id, filter);
  }

  @put('/cartao-andante/{id}')
  @response(204, {
    description: 'CartaoAndante PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cartaoAndante: CartaoAndante,
  ): Promise<void> {
    await this.cartaoAndanteRepository.replaceById(id, cartaoAndante);
  }

  @del('/cartao-andante/{id}')
  @response(204, {
    description: 'CartaoAndante DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cartaoAndanteRepository.deleteById(id);
  }

  @get('/cartao-andante/{id}/viagens')
  async getViagensByCartaoId(
    @param.path.string('id') id: string,
  ): Promise<any> {
    const viagens = await this.cartaoAndanteRepository.execute(`
      SELECT andante_database.Viagem.ViagemId, InicioViagem, DataViagem, Validacao, CartaoID
      FROM andante_database.Viagem
      LEFT JOIN andante_database.Efetua
      ON andante_database.Viagem.ViagemID = andante_database.Efetua.ViagemID
      WHERE CartaoID = ${id};`
    );

    return viagens;
  }

  @get('/cartao-andante/viagens')
  async getviagensbycartaoAndante(): Promise<any> {
    const cartaoAndante = await this.cartaoAndanteRepository.execute(`
    SELECT *
    FROM andante_database.Viagem
    LEFT JOIN andante_database.Efetua
    ON andante_database.Viagem.ViagemID = andante_database.Efetua.ViagemID`
    );

    return cartaoAndante;
  }
  

}

