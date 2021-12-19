import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConectionDataSource} from '../datasources';
import {Licencias, LicenciasRelations} from '../models';

export class LicenciasRepository extends DefaultCrudRepository<
  Licencias,
  typeof Licencias.prototype.id,
  LicenciasRelations
> {
  constructor(
    @inject('datasources.Conection') dataSource: ConectionDataSource,
  ) {
    super(Licencias, dataSource);
  }
}
