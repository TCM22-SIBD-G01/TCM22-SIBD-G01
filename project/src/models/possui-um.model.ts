import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      NIF: {
        name: 'fk_Possui_um_NIF',
        entity: 'Utilizador',
        entityKey: 'NIF',
        foreignKey: 'NIF',
      },
      CartaoID: {
        name: 'fk_Possui_um_CartaoID',
        entity: 'CartaoAndante',
        entityKey: 'CartaoID',
        foreignKey: 'CartaoID',
      },
    }
  }
})
export class PossuiUm extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Possui_umID?: number;

  @property({
    type: 'number',
    required: true,
  })
  NIF: number;

  @property({
    type: 'number',
    required: true,
  })
  CartaoID: number;


  constructor(data?: Partial<PossuiUm>) {
    super(data);
  }
}

export interface PossuiUmRelations {
  // describe navigational properties here
}

export type PossuiUmWithRelations = PossuiUm & PossuiUmRelations;
