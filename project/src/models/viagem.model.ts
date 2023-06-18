import {Entity, model, property} from '@loopback/repository';
import { EfetuaWithRelations } from './efetua.model';

@model()
export class Viagem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ViagemID?: number;

  @property({
    type: 'string',
    required: true,
  })
  InicioViagem: string;

  @property({
    type: 'date',
    required: true,
  })
  DataViagem: string;

  @property({
    type: 'string',
    required: true,
  })
  Validacao: string;


  constructor(data?: Partial<Viagem>) {
    super(data);
  }
}

export interface ViagemRelations {
  // describe navigational properties here
  efectua: EfetuaWithRelations;
}

export type ViagemWithRelations = Viagem & ViagemRelations;
