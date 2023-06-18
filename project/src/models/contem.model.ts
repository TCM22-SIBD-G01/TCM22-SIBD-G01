import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      AssinaturaID: {
        name: 'fk_Contem_AssinaturaID',
        entity: 'Assinatura',
        entityKey: 'AssinaturaID',
        foreignKey: 'AssinaturaID',
      },
      CartaoID: {
        name: 'fk_Contem_CartaoID',
        entity: 'CartaoAndante',
        entityKey: 'CartaoID',
        foreignKey: 'CartaoID',
      },
    }
  }
})
export class Contem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ContemID?: number;

  @property({
    type: 'number',
    required: true,
  })
  AssinaturaID: number;

  @property({
    type: 'number',
    required: true,
  })
  CartaoID: number;


  constructor(data?: Partial<Contem>) {
    super(data);
  }
}

export interface ContemRelations {
  // describe navigational properties here
}

export type ContemWithRelations = Contem & ContemRelations;
