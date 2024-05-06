const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull, // Used for making a field required.
} = graphql;

const ShiftType = new GraphQLObjectType({
  name: "Shift",
  fields: () => ({
    id: { type: GraphQLID },
    shift: { type: GraphQLString },
    startTime: { type: GraphQLString },
    endTime: { type: GraphQLString },

    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});

module.exports = ShiftType;
