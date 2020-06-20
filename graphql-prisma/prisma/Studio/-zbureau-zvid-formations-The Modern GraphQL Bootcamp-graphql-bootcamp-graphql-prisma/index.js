
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  debugLib,
  sqltag
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')

debug("Client Version 2.0.1")
debug("Engine Version 7d77a7cd570c9dedb4cdf31a1cbec615cf2e1eda")

/**
 * Prisma Client JS version: 2.0.1
 * Query Engine version: 7d77a7cd570c9dedb4cdf31a1cbec615cf2e1eda
 */
exports.prismaVersion = {
  client: "2.0.1",
  engine: "7d77a7cd570c9dedb4cdf31a1cbec615cf2e1eda"
}

exports.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = PrismaClientRustPanicError;
exports.PrismaClientInitializationError = PrismaClientInitializationError;
exports.PrismaClientValidationError = PrismaClientValidationError;

/**
 * Re-export of sql-template-tag
 */

exports.sql = sqltag.sqltag
exports.empty = sqltag.empty
exports.join = sqltag.join
exports.raw = sqltag.raw


/**
 * Build tool annotations
 * In order to make `ncc` and `node-file-trace` happy.
**/

path.join(__dirname, 'query-engine-windows');

/**
 * Annotation for Vercel
**/
path.join(__dirname, 'schema.prisma');

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.OrderByArg = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"User\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"Int\",\"hasDefaultValue\":true,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"DateTime\",\"hasDefaultValue\":true,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"DateTime\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":true}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"mappings\":[{\"model\":\"User\",\"plural\":\"users\",\"findOne\":\"findOneUser\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\"}],\"schema\":{\"enums\":[{\"name\":\"OrderByArg\",\"values\":[\"asc\",\"desc\"]}],\"outputTypes\":[{\"name\":\"User\",\"fields\":[{\"name\":\"id\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"name\",\"args\":[],\"outputType\":{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"createdAt\",\"args\":[],\"outputType\":{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"updatedAt\",\"args\":[],\"outputType\":{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"AggregateUser\",\"fields\":[{\"name\":\"count\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"UserOrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"UserWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Query\",\"fields\":[{\"name\":\"findManyUser\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"orderBy\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"type\":\"UserOrderByInput\",\"kind\":\"object\"}]},{\"name\":\"cursor\",\"inputType\":[{\"type\":\"UserWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"take\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"skip\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"User\",\"kind\":\"object\",\"isRequired\":true,\"isList\":true,\"isNullable\":false}},{\"name\":\"aggregateUser\",\"args\":[],\"outputType\":{\"type\":\"AggregateUser\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"findOneUser\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"User\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"outputType\":{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneUser\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"UserCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"User\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteOneUser\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"User\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateOneUser\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"UserUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"User\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}},{\"name\":\"upsertOneUser\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereUniqueInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"create\",\"inputType\":[{\"type\":\"UserCreateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"update\",\"inputType\":[{\"type\":\"UserUpdateInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"User\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"updateManyUser\",\"args\":[{\"name\":\"data\",\"inputType\":[{\"type\":\"UserUpdateManyMutationInput\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"deleteManyUser\",\"args\":[{\"name\":\"where\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"BatchPayload\",\"kind\":\"object\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"parameters\",\"inputType\":[{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"outputType\":{\"type\":\"Json\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}}]}],\"inputTypes\":[{\"name\":\"UserWhereInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"type\":\"IntFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"name\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"type\":\"StringFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"createdAt\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"type\":\"DateTimeFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"updatedAt\",\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"type\":\"DateTimeFilter\",\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"object\"}],\"isRelationFilter\":false},{\"name\":\"AND\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"OR\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true},{\"name\":\"NOT\",\"inputType\":[{\"type\":\"UserWhereInput\",\"kind\":\"object\",\"isRequired\":false,\"isList\":true,\"isNullable\":false}],\"isRelationFilter\":true}],\"isWhereType\":true,\"atLeastOne\":false},{\"name\":\"UserWhereUniqueInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}],\"atLeastOne\":true},{\"name\":\"UserCreateInput\",\"fields\":[{\"name\":\"name\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":true,\"isList\":false,\"isNullable\":false}]},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"updatedAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"UserUpdateInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"name\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"updatedAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"UserUpdateManyMutationInput\",\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"Int\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"name\",\"inputType\":[{\"type\":\"String\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]},{\"name\":\"updatedAt\",\"inputType\":[{\"type\":\"DateTime\",\"kind\":\"scalar\",\"isRequired\":false,\"isList\":false,\"isNullable\":false}]}]},{\"name\":\"IntFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"IntFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"Int\"}]}],\"atLeastOne\":false},{\"name\":\"StringFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"StringFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"contains\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"startsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]},{\"name\":\"endsWith\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"String\"}]}],\"atLeastOne\":false},{\"name\":\"DateTimeFilter\",\"fields\":[{\"name\":\"equals\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"not\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTimeFilter\"}]},{\"name\":\"in\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"notIn\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":true,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"lt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"lte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"gt\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]},{\"name\":\"gte\",\"isRelationFilter\":false,\"inputType\":[{\"isList\":false,\"isRequired\":false,\"isNullable\":false,\"kind\":\"scalar\",\"type\":\"DateTime\"}]}],\"atLeastOne\":false},{\"name\":\"UserOrderByInput\",\"atLeastOne\":true,\"atMostOne\":true,\"isOrderType\":true,\"fields\":[{\"name\":\"id\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"name\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"createdAt\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false},{\"name\":\"updatedAt\",\"inputType\":[{\"type\":\"OrderByArg\",\"isList\":false,\"isRequired\":false,\"isNullable\":true,\"kind\":\"enum\"}],\"isRelationFilter\":false}]}]}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "binaryTargets": [],
    "config": {
      "copyRuntime": "true"
    },
    "name": "photon",
    "provider": "prisma-client-js",
    "output": "D:\\zbureau\\zvid\\formations\\The Modern GraphQL Bootcamp\\graphql-bootcamp\\graphql-prisma\\Prisma\\Studio\\-zbureau-zvid-formations-The Modern GraphQL Bootcamp-graphql-bootcamp-graphql-prisma",
    "isCustomOutput": true
  },
  "sqliteDatasourceOverrides": [],
  "relativePath": "..\\..",
  "internalDatasources": [
    {
      "name": "db",
      "connectorType": "postgresql",
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgres://vurxzgkkwlekqv:d146f65fab985b45dec99fe86f8820c50fe645a9cce2e423d97895feae03d5d2@ec2-54-75-229-28.eu-west-1.compute.amazonaws.com:5432/d9m635c2dhl320"
      }
    }
  ],
  "clientVersion": "2.0.1"
}
config.document = dmmf
config.dirname = __dirname

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient