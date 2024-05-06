const graphql = require("graphql");
const { GraphQLLocalTime, GraphQLNonEmptyString } = require("graphql-scalars");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull, // Used for making a field required.
} = graphql;

const {
  ShiftType,
  DepartmentType,
  RoleType,
  UserType,
} = require("../schema-types");

const {
  GetAllShifts,
  GetShiftById,
  AddShift,
  UpdateShift,
  DeleteShift,
} = require("../controllers/Shift");
const {
  GetAllDepartments,
  GetDepartmentById,
  AddDepartment,
  UpdateDepartment,
  DeleteDepartment,
} = require("../controllers/Department");
const {
  GetAllRoles,
  GetRoleById,
  AddRole,
  UpdateRole,
  DeleteRole,
} = require("../controllers/Role");
const {
  GetUserById,
  GetAllUsers,
  UpdateUser,
  DeleteUser,
  AddUser,
} = require("../controllers/User");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    // Shift:
    shifts: {
      type: new GraphQLList(ShiftType),
      description: "List of all Shifts",
      resolve: (parent, args) => GetAllShifts(),
    },
    shift: {
      type: ShiftType,
      description: "A single Shift",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetShiftById(parent, args),
    },

    // Department:
    departments: {
      type: new GraphQLList(DepartmentType),
      description: "List of all Departments",
      resolve: (parent, args) => GetAllDepartments(),
    },
    department: {
      type: DepartmentType,
      description: "A single Department",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetDepartmentById(parent, args),
    },

    // Role:
    roles: {
      type: new GraphQLList(RoleType),
      description: "List of all Roles",
      resolve: (parent, args) => GetAllRoles(),
    },
    role: {
      type: RoleType,
      description: "A single Role",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetRoleById(parent, args),
    },

    // User:
    users: {
      type: new GraphQLList(UserType),
      description: "List of all Users",
      resolve: (parent, args) => GetAllUsers(),
    },
    user: {
      type: UserType,
      description: "A single User",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetUserById(parent, args),
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Shift:
    addShift: {
      type: ShiftType,
      description: "Add a new Shift",
      args: {
        shift: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        startTime: { type: new GraphQLNonNull(GraphQLLocalTime) },
        endTime: { type: new GraphQLNonNull(GraphQLLocalTime) },
      },
      resolve: (parent, args) => AddShift(parent, args),
    },
    updateShift: {
      type: GraphQLString,
      description: "Update a Shift",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        shift: { type: GraphQLNonEmptyString },
        startTime: { type: GraphQLLocalTime },
        endTime: { type: GraphQLLocalTime },
      },
      resolve: (parent, args) => UpdateShift(parent, args),
    },
    deleteShift: {
      type: GraphQLString,
      description: "Delete a Shift",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteShift(parent, args),
    },

    // Department:
    addDepartment: {
      type: DepartmentType,
      description: "Add a new Department",
      args: {
        departmentHead: { type: GraphQLID },
        departmentName: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        employeeCount: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => AddDepartment(parent, args),
    },
    updateDepartment: {
      type: GraphQLString,
      description: "Update a Department",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        departmentHead: { type: GraphQLID },
        departmentName: { type: GraphQLNonEmptyString },
        employeeCount: { type: GraphQLInt },
      },
      resolve: (parent, args) => UpdateDepartment(parent, args),
    },
    deleteDepartment: {
      type: GraphQLString,
      description: "Delete a Department",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteDepartment(parent, args),
    },

    // Role:
    addRole: {
      type: RoleType,
      description: "Add a new Role",
      args: {
        roleName: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        designation: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        description: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
      },
      resolve: (parent, args) => AddRole(parent, args),
    },
    updateRole: {
      type: GraphQLString,
      description: "Update a Role",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        roleName: { type: GraphQLNonEmptyString },
        designation: { type: GraphQLNonEmptyString },
        description: { type: GraphQLNonEmptyString },
      },
      resolve: (parent, args) => UpdateRole(parent, args),
    },
    deleteRole: {
      type: GraphQLString,
      description: "Delete a Role",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteRole(parent, args),
    },

    // User:
    addUser: {
      type: UserType,
      description: "Add a new User",
      args: {
        roleName: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        designation: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        description: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
      },
      resolve: (parent, args) => AddUser(parent, args),
    },
    updateUser: {
      type: GraphQLString,
      description: "Update a User",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        roleName: { type: GraphQLNonEmptyString },
        designation: { type: GraphQLNonEmptyString },
        description: { type: GraphQLNonEmptyString },
      },
      resolve: (parent, args) => UpdateUser(parent, args),
    },
    deleteUser: {
      type: GraphQLString,
      description: "Delete a User",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteUser(parent, args),
    },
  },
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
