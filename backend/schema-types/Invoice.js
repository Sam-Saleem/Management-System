const graphql = require("graphql");
const {
  GraphQLDate,
  GraphQLNonEmptyString,
  GraphQLLocalTime,
} = require("graphql-scalars");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
} = graphql;

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
