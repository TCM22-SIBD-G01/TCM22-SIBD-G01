import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {Efetua, EfetuaRelations} from '../models';

export class EfetuaRepository extends DefaultCrudRepository<
  Efetua,
  typeof Efetua.prototype.EfetuaID,
  EfetuaRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(Efetua, dataSource);
  }
}
