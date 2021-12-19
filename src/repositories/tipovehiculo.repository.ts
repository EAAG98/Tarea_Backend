import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConectionDataSource} from '../datasources';
import {Tipovehiculo, TipovehiculoRelations} from '../models';

export class TipovehiculoRepository extends DefaultCrudRepository<
  Tipovehiculo,
  typeof Tipovehiculo.prototype.id,
  TipovehiculoRelations
> {
  constructor(
    @inject('datasources.Conection') dataSource: ConectionDataSource,
  ) {
    super(Tipovehiculo, dataSource);
  }
}
