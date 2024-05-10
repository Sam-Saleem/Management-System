const graphql = require("graphql");
const { GraphQLBigInt, GraphQLDate } = require("graphql-scalars");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLBoolean,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    shiftId: { type: GraphQLID },
    roleId: { type: GraphQLID },
    departmentId: { type: GraphQLID },
    employeeId: { type: GraphQLString },
    name: { type: GraphQLString },
    mobileNo: { type: GraphQLString },
    cnic: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    address: { type: GraphQLString },
    jobTitle: { type: GraphQLString },
    hireDate: { type: GraphQLDate },
    dob: { type: GraphQLString },
    status: { type: GraphQLString },
    leaves: { type: GraphQLInt },
    availableLeaves: { type: GraphQLInt },
    commissionFlag: { type: GraphQLBoolean },
    commissionPercentage: { type: GraphQLInt },

    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = UserType;
