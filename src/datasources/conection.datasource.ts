import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Conection',
  connector: 'mongodb',
  url: 'mongodb+srv://erickAyestas:mascotas98@cluster0.8pp8k.mongodb.net/flotavehicular?authSource=admin&replicaSet=atlas-s5ufde-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
  host: 'cluster0.8pp8k.mongodb.net',
  port: 27017,
  user: 'erickAyestas',
  password: 'mascotas98',
  database: 'flotavehicular',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConectionDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Conection';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Conection', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
