import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      ViagemID: {
        name: 'fk_Efetua_ViagemID',
        entity: 'Viagem',
        entityKey: 'ViagemID',
        foreignKey: 'ViagemID',
      },
      CartaoID: {
        name: 'fk_Efetua_CartaoID',
        entity: 'CartaoAndante',
        entityKey: 'CartaoID',
        foreignKey: 'CartaoID',
      },
    }
  }
})
export class Efetua extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  EfetuaID?: number;

  @property({
    type: 'number',
    required: true,
  })
  ViagemID: number;

  @property({
    type: 'number',
    required: true,
  })
  CartaoID: number;


  constructor(data?: Partial<Efetua>) {
    super(data);
  }
}

export interface EfetuaRelations {
  // describe navigational properties here
}

export type EfetuaWithRelations = Efetua & EfetuaRelations;
