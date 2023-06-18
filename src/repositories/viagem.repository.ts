import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {Viagem, ViagemRelations} from '../models';

export class ViagemRepository extends DefaultCrudRepository<
  Viagem,
  typeof Viagem.prototype.ViagemID,
  ViagemRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(Viagem, dataSource);
  }
}
