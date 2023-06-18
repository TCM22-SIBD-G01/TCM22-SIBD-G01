import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {Assinatura, AssinaturaRelations} from '../models';

export class AssinaturaRepository extends DefaultCrudRepository<
  Assinatura,
  typeof Assinatura.prototype.AssinaturaID,
  AssinaturaRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(Assinatura, dataSource);
  }
}
