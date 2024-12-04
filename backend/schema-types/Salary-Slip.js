const graphql = require("graphql");
const { GraphQLDate } = require("graphql-scalars");

const { GraphQLObjectType, GraphQLID, GraphQLFloat } = graphql;

const SalarySlipType = new GraphQLObjectType({
  name: "SalarySlip",
  fields: () => ({
    id: { type: GraphQLID },
    employeeId: { type: GraphQLID },
    salary: { type: GraphQLFloat },
    overtime: { type: GraphQLFloat },
    date: { type: GraphQLDate },
    totalPay: { type: GraphQLFloat },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = SalarySlipType;
