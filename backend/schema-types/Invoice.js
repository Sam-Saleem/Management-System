const graphql = require("graphql");
const { GraphQLDate, GraphQLNonEmptyString } = require("graphql-scalars");

const { GraphQLObjectType, GraphQLID, GraphQLFloat } = graphql;

const InvoiceType = new GraphQLObjectType({
  name: "Invoice",
  fields: () => ({
    id: { type: GraphQLID },
    projectId: { type: GraphQLID },
    amount: { type: GraphQLFloat },
    dueDate: { type: GraphQLDate },
    description: { type: GraphQLNonEmptyString },
    status: { type: GraphQLNonEmptyString },
    taxAmount: { type: GraphQLFloat },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = InvoiceType;
