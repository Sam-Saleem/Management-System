const graphql = require("graphql");
const { GraphQLDate, GraphQLLocalTime } = require("graphql-scalars");

const { GraphQLObjectType, GraphQLID, GraphQLInt } = graphql;

const ProjectProgressType = new GraphQLObjectType({
  name: "ProjectProgress",
  fields: () => ({
    id: { type: GraphQLID },
    employeeId: { type: GraphQLID },
    projectId: { type: GraphQLID },
    date: { type: GraphQLDate },
    hoursWorked: { type: GraphQLInt },
    totalAmount: { type: GraphQLInt },
    startTime: { type: GraphQLLocalTime },
    endTime: { type: GraphQLLocalTime },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = ProjectProgressType;
