'use strict';
var config;

switch (process.env.NODE_ENV) {
    case 'development':
        config = {
            NEW_RELIC_KEY: '',
            APP_PORT: 3000,
            urls:{
                SSO: 'http://local-sso.botplatform.io/',
                GRAILS: 'http://local.botplatform.io/'
            },
            database: {
                mongo:{
                    replSetUrl:"mongodb://localhost:27017",
                    replSetOption:"",
                    host: 'localhost',
                    port: 27017,
                    options: {
                        user: '',
                        pass: '',
                        server: {
                            poolSize: 5
                        }
                    }
                }
            },
            bots: {
                TELEGRAM_MOVIE: '183612829:AAGrCTtEu93nUBqp4NBMcKeqcpOeD3aD2t4'
            },
            redis: {
                host: 'localhost',
                port: 6379
            },
            facebook: {
                token: {
                    ym:process.env.FACEBOOK_TOKEN
                },
                APP_ID : '171960766175848',
                APP_SECRET: '6efdc0b59bb62664129da71ae58d3595',
                APP_ACCESS_TOKEN: '1729287550616352|GWZqwfgZ5o48thCfZLX6hDcDY2U'
            },
            elasticSearch : {
                host:'http://localhost:9200'
            },
            esCulster : {
                hosts:["localhost:9200"]
            },
            rabbitmq: {
                host: '10.0.0.35'
            },
            SPACY_URL : 'http://spacy.ym.com'
        }

        break;
    case 'production':
        config = {
            NEW_RELIC_KEY: '9878ec66058ae573c36e3886142fc3d2dd05bcdf',
            APP_PORT: 3007,
            urls:{
                SSO: 'http://node-2:3000/'
            },
            database: {
                mongo:{
                    replSetUrl:"mongodb://mongodb-0:27017,mongodb-1:27017,mongodb-2:27017",
                    replSetOption:"?replicaSet=rs0&readPreference=secondary",
                    host: 'mongodb-0',
                    port: 27017,
                    options: {
                        server: {
                            poolSize: 25
                        },
                        replset: { rs_name: 'rs0' }
                    }
                }
            },
            bots: {
                TELEGRAM_MOVIE: '192968539:AAH63LVv4d9roEA-YdWiT3TTuGpnbFA1sh8'
            },
            redis: {
                host: 'redis',
                port: 6379
            },
            facebook: {
                token: {
                    ym:""
                },
                APP_ID : '1729287550616352',
                APP_SECRET: '341f26dfae478f2983280ff0472c12dd',
                APP_ACCESS_TOKEN: '1729287550616352|GWZqwfgZ5o48thCfZLX6hDcDY2U'
            },
            esCulster : {
                hosts:["es-node-0:9200","es-node-1:9200","es-node-2:9200"]
            },
            elasticSearch : {
                host: 'http://elastic-search-1:9200'
            },
            rabbitmq: {
                host: 'rabbitmq-0'
            },
            SPACY_URL : 'http://spacy.ym.com'
        };
        break;
    default:
        config = {
            NEW_RELIC_KEY: '',
            APP_PORT: 3000,
            urls:{
                SSO: 'http://local-sso.botplatform.io/',
                GRAILS: 'http://local.botplatform.io/'
            },
            database: {
                mongo:{
                    replSetUrl:"mongodb://localhost:27017",
                    replSetOption:"",
                    host: 'localhost',
                    port: 27017,
                    options: {
                        user: '',
                        pass: '',
                        server: {
                            poolSize: 5
                        }
                    }
                }
            },
            bots: {
                TELEGRAM_MOVIE: '183612829:AAGrCTtEu93nUBqp4NBMcKeqcpOeD3aD2t4'
            },
            redis: {
                host: 'localhost',
                port: 6379
            },
            facebook: {
                token: {
                    ym:process.env.FACEBOOK_TOKEN
                },
                APP_ID : '171960766175848',
                APP_SECRET: '6efdc0b59bb62664129da71ae58d3595',
                APP_ACCESS_TOKEN: '1729287550616352|GWZqwfgZ5o48thCfZLX6hDcDY2U'
            },
            elasticSearch : {
                host:'http://localhost:9200'
            },
            esCulster : {

                hosts:["localhost:9200"]
            },
            rabbitmq: {
                host: '10.0.0.35'
            },
            SPACY_URL : 'http://spacy.ym.com'
        }
}

module.exports = config;
