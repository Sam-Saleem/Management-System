const graphql = require("graphql");
const { GraphQLDate } = require("graphql-scalars");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
} = graphql;

const SalaryType = new GraphQLObjectType({
  name: "Salary",
  fields: () => ({
    id: { type: GraphQLID },
    employeeId: { type: GraphQLID },
    amount: { type: GraphQLInt },
    effectiveDate: { type: GraphQLDate },
    incrementDate: { type: GraphQLDate },
    incrementPercentage: { type: GraphQLFloat },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = SalaryType;
