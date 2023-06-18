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
import {Utilizador} from '../models';
import {UtilizadorRepository} from '../repositories';

export class UtilizadorController {
  constructor(
    @repository(UtilizadorRepository)
    public utilizadorRepository : UtilizadorRepository,
  ) {}

  @post('/utilizadores')
  @response(200, {
    description: 'Utilizador model instance',
    content: {'application/json': {schema: getModelSchemaRef(Utilizador)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilizador, {
            title: 'NewUtilizador',
            
          }),
        },
      },
    })
    utilizador: Utilizador,
  ): Promise<Utilizador> {
    return this.utilizadorRepository.create(utilizador);
  }

  @get('/utilizadores/count')
  @response(200, {
    description: 'Utilizador model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Utilizador) where?: Where<Utilizador>,
  ): Promise<Count> {
    return this.utilizadorRepository.count(where);
  }

  @get('/utilizadores')
  @response(200, {
    description: 'Array of Utilizador model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Utilizador, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.where(Utilizador) where?: Filter<Utilizador>,
  ): Promise<Utilizador[]> {
    return this.utilizadorRepository.find(where);
  }

  @get('/utilizadores/{id}')
  @response(200, {
    description: 'Utilizador model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Utilizador, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Utilizador, {exclude: 'where'}) filter?: FilterExcludingWhere<Utilizador>
  ): Promise<Utilizador> {
    return this.utilizadorRepository.findById(id, filter);
  }

  @put('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizador PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilizador: Utilizador,
  ): Promise<void> {
    await this.utilizadorRepository.replaceById(id, utilizador);
  }

  @del('/utilizadores/{id}')
  @response(204, {
    description: 'Utilizador DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilizadorRepository.deleteById(id);
  }
  @get('/utilizadores/{id}/cartao-andante')
  async getUtilizadores(@param.path.string('id') id: string,
  ):    
  Promise<any> {
    const utilizadores = await this.utilizadorRepository.execute(`
    SELECT andante_database.CartaoAndante.CartaoID, andante_database.Assinatura.Validade, Preco, TipodeAssinatura, andante_database.Possui_um.NIF, Nome, Email, NumeroTelemovel FROM CartaoAndante
    LEFT JOIN andante_database.Possui_um
    ON andante_database.CartaoAndante.CartaoID = andante_database.Possui_um.CartaoID
    LEFT JOIN andante_database.Utilizador
    ON andante_database.Utilizador.NIF = andante_database.Possui_um.NIF
    LEFT JOIN andante_database.Contem
    ON andante_database.Contem.CartaoID = andante_database.CartaoAndante.CartaoID
    LEFT JOIN andante_database.Assinatura
    ON andante_database.Assinatura.AssinaturaID = andante_database.Contem.AssinaturaID
    WHERE andante_database.CartaoAndante.CartaoID  = ${id};`
    );

    return utilizadores;
  }
  @get('utilizadores/cartao-andante')
  async getUtilizador(): Promise<any> {
    const utilizadores = await this.utilizadorRepository.execute(`
    SELECT andante_database.CartaoAndante.CartaoID, andante_database.Assinatura.Validade, Preco, TipodeAssinatura, andante_database.Possui_um.NIF, Nome, Email, NumeroTelemovel FROM CartaoAndante
    LEFT JOIN andante_database.Possui_um
    ON andante_database.CartaoAndante.CartaoID = andante_database.Possui_um.CartaoID
    LEFT JOIN andante_database.Utilizador
    ON andante_database.Utilizador.NIF = andante_database.Possui_um.NIF
    LEFT JOIN andante_database.Contem
    ON andante_database.Contem.CartaoID = andante_database.CartaoAndante.CartaoID
    LEFT JOIN andante_database.Assinatura
    ON andante_database.Assinatura.AssinaturaID = andante_database.Contem.AssinaturaID;`
    );

    return utilizadores;
  }

}
