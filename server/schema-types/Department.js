const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const DepartmentType = new GraphQLObjectType({
  name: "Department",
  fields: () => ({
    id: { type: GraphQLID },
    departmentHead: { type: GraphQLID },
    departmentName: { type: GraphQLString },
    employeeCount: { type: GraphQLInt },

    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = DepartmentType;
