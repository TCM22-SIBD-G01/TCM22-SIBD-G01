import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {PossuiUm, PossuiUmRelations} from '../models';

export class PossuiUmRepository extends DefaultCrudRepository<
  PossuiUm,
  typeof PossuiUm.prototype.Possui_umID,
  PossuiUmRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(PossuiUm, dataSource);
  }
}
