import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {Utilizador, UtilizadorRelations} from '../models';

export class UtilizadorRepository extends DefaultCrudRepository<
  Utilizador,
  typeof Utilizador.prototype.NIF,
  UtilizadorRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(Utilizador, dataSource);
  }
}
