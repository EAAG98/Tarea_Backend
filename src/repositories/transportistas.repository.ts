import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConectionDataSource} from '../datasources';
import {Transportistas, TransportistasRelations} from '../models';

export class TransportistasRepository extends DefaultCrudRepository<
  Transportistas,
  typeof Transportistas.prototype.id,
  TransportistasRelations
> {
  constructor(
    @inject('datasources.Conection') dataSource: ConectionDataSource,
  ) {
    super(Transportistas, dataSource);
  }
}
