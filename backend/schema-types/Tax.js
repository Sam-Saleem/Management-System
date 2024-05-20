const graphql = require("graphql");
const { GraphQLDate } = require("graphql-scalars");

const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLFloat } = graphql;

const TaxType = new GraphQLObjectType({
  name: "Tax",
  fields: () => ({
    id: { type: GraphQLID },
    minIncome: { type: GraphQLInt },
    maxIncome: { type: GraphQLInt },
    taxRate: { type: GraphQLFloat },
    taxAmount: { type: GraphQLInt },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = TaxType;
