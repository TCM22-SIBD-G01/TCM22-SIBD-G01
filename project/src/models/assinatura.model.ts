import {Entity, model, property} from '@loopback/repository';

@model()
export class Assinatura extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  AssinaturaID?: number;

  @property({
    type: 'string',
    required: true,
  })
  TipoAssinatura: string;

  @property({
    type: 'date',
    required: true,
  })
  Validade: string;

  @property({
    type: 'number',
    required: true,
  })
  Preco: number;


  constructor(data?: Partial<Assinatura>) {
    super(data);
  }
}

export interface AssinaturaRelations {
  // describe navigational properties here
}

export type AssinaturaWithRelations = Assinatura & AssinaturaRelations;
