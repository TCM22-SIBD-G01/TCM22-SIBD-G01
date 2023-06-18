import {Entity, model, property} from '@loopback/repository';

@model()
export class Utilizador extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  NIF: number;

  @property({
    type: 'string',
    required: true,
  })
  Nome: string;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'number',
    required: true,
  })
  NumeroTelemovel: number;

  @property({
    type: 'string',
    required: true,
  })
  Endereco: string;


  constructor(data?: Partial<Utilizador>) {
    super(data);
  }
}

export interface UtilizadorRelations {
  // describe navigational properties here
}

export type UtilizadorWithRelations = Utilizador & UtilizadorRelations;
