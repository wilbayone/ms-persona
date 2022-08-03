import {Entity, model, property} from '@loopback/repository';

@model()
export class Cita extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCita?: number;

  @property({
    type: 'date',
    required: true,
  })
  citaFecha: string;


  constructor(data?: Partial<Cita>) {
    super(data);
  }
}

export interface CitaRelations {
  // describe navigational properties here
}

export type CitaWithRelations = Cita & CitaRelations;
