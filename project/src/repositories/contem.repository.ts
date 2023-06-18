import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {Contem, ContemRelations} from '../models';

export class ContemRepository extends DefaultCrudRepository<
  Contem,
  typeof Contem.prototype.ContemID,
  ContemRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(Contem, dataSource);
  }
}
