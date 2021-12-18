import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConectionDataSource} from '../datasources';
import {Recorridos, RecorridosRelations} from '../models';

export class RecorridosRepository extends DefaultCrudRepository<
  Recorridos,
  typeof Recorridos.prototype.id,
  RecorridosRelations
> {
  constructor(
    @inject('datasources.Conection') dataSource: ConectionDataSource,
  ) {
    super(Recorridos, dataSource);
  }
}
