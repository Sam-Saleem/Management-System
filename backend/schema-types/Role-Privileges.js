const graphql = require("graphql");
const { GraphQLDate, GraphQLNonEmptyString } = require("graphql-scalars");

const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;

const RolePrivilegesType = new GraphQLObjectType({
  name: "RolePrivileges",
  fields: () => ({
    id: { type: GraphQLID },
    tableName: { type: GraphQLNonEmptyString },
    canCreate: { type: new GraphQLList(GraphQLID) },
    canRead: { type: new GraphQLList(GraphQLID) },
    canUpdate: { type: new GraphQLList(GraphQLID) },
    canDelete: { type: new GraphQLList(GraphQLID) },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = RolePrivilegesType;
