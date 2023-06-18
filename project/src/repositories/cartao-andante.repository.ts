import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AndanteDatabaseDataSource} from '../datasources';
import {CartaoAndante, CartaoAndanteRelations} from '../models';

export class CartaoAndanteRepository extends DefaultCrudRepository<
  CartaoAndante,
  typeof CartaoAndante.prototype.CartaoID,
  CartaoAndanteRelations
> {
  constructor(
    @inject('datasources.andante_database') dataSource: AndanteDatabaseDataSource,
  ) {
    super(CartaoAndante, dataSource);
  }
}
