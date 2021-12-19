import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Tipovehiculo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  pickup: string;

  @property({
    type: 'string',
    required: true,
  })
  camion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tipovehiculo>) {
    super(data);
  }
}

export interface TipovehiculoRelations {
  // describe navigational properties here
}

export type TipovehiculoWithRelations = Tipovehiculo & TipovehiculoRelations;
