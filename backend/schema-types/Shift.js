const graphql = require("graphql");
const {
  GraphQLNonEmptyString,
  GraphQLLocalTime,
  GraphQLDate,
} = require("graphql-scalars");

const { GraphQLObjectType, GraphQLID } = graphql;

const ShiftType = new GraphQLObjectType({
  name: "Shift",
  fields: () => ({
    id: { type: GraphQLID },
    shift: { type: GraphQLNonEmptyString },
    startTime: { type: GraphQLLocalTime },
    endTime: { type: GraphQLLocalTime },

    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  }),
});

module.exports = ShiftType;
