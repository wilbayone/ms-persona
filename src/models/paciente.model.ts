import {Entity, model, property} from '@loopback/repository';

@model()
export class Paciente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPaciente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;


  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
