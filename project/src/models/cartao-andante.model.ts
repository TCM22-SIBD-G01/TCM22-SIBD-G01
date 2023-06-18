import {Entity, model, property} from '@loopback/repository';

@model()
export class CartaoAndante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  CartaoID?: number;

  @property({
    type: 'date',
    required: true,
  })
  Validade: string;

  constructor(data?: Partial<CartaoAndante>) {
    super(data);
  }
}

export interface CartaoAndanteRelations {
  // describe navigational properties here
}

export type CartaoAndanteWithRelations = CartaoAndante & CartaoAndanteRelations;
