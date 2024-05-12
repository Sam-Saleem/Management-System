const graphql = require("graphql");
const {
  GraphQLLocalTime,
  GraphQLNonEmptyString,
  GraphQLDate,
} = require("graphql-scalars");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLList,
  GraphQLNonNull, // Used for making a field required.
} = graphql;

const {
  ShiftType,
  DepartmentType,
  RoleType,
  UserType,
  SalaryType,
  AttendanceType,
  ProjectType,
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
const {
  GetAllSalaries,
  GetSalaryById,
  CreateSalary,
  UpdateSalary,
  DeleteSalary,
} = require("../controllers/Salary");
const {
  GetAllAttendances,
  GetAttendanceById,
  UpdateAttendance,
  DeleteAttendance,
  CreateAttendance,
} = require("../controllers/Attendance");
const {
  GetAllProjects,
  GetProjectById,
  CreateProject,
  UpdateProject,
  DeleteProject,
} = require("../controllers/Project");

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
    // Salary:
    salaries: {
      type: new GraphQLList(SalaryType),
      description: "List of all Salaries",
      resolve: (parent, args) => GetAllSalaries(),
    },
    salary: {
      type: SalaryType,
      description: "Salary of given id",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetSalaryById(parent, args),
    },

    // Attendance:
    attendances: {
      type: new GraphQLList(AttendanceType),
      description: "List of all Attendances",
      resolve: (parent, args) => GetAllAttendances(),
    },
    attendance: {
      type: AttendanceType,
      description: "Attendance of given id",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetAttendanceById(parent, args),
    },

    // Project:
    projects: {
      type: new GraphQLList(ProjectType),
      description: "List of all Projects",
      resolve: (parent, args) => GetAllProjects(),
    },
    project: {
      type: ProjectType,
      description: "Project of given id",
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve: (parent, args) => GetProjectById(parent, args),
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
        shiftId: { type: new GraphQLNonNull(GraphQLID) },
        roleId: { type: new GraphQLNonNull(GraphQLID) },
        departmentId: { type: new GraphQLNonNull(GraphQLID) },
        employeeId: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        name: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        mobileNo: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        cnic: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        email: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        password: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        address: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        jobTitle: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        hireDate: { type: new GraphQLNonNull(GraphQLDate) },
        dob: { type: new GraphQLNonNull(GraphQLDate) },
        status: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        leaves: { type: new GraphQLNonNull(GraphQLInt) },
        availableLeaves: { type: new GraphQLNonNull(GraphQLInt) },
        commissionFlag: { type: new GraphQLNonNull(GraphQLBoolean) },
        commissionPercentage: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (parent, args) => AddUser(parent, args),
    },
    updateUser: {
      type: GraphQLString,
      description: "Update a User",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        shiftId: { type: GraphQLID },
        roleId: { type: GraphQLID },
        departmentId: { type: GraphQLID },
        employeeId: { type: GraphQLNonEmptyString },
        name: { type: GraphQLNonEmptyString },
        mobileNo: { type: GraphQLNonEmptyString },
        cnic: { type: GraphQLNonEmptyString },
        email: { type: GraphQLNonEmptyString },
        password: { type: GraphQLNonEmptyString },
        address: { type: GraphQLNonEmptyString },
        jobTitle: { type: GraphQLNonEmptyString },
        hireDate: { type: GraphQLDate },
        dob: { type: GraphQLDate },
        status: { type: GraphQLNonEmptyString },
        leaves: { type: GraphQLInt },
        availableLeaves: { type: GraphQLInt },
        commissionFlag: { type: GraphQLBoolean },
        commissionPercentage: {
          type: GraphQLInt,
        },
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

    // Salary:
    createSalary: {
      type: SalaryType,
      description: "Create new Salary",
      args: {
        employeeId: { type: new GraphQLNonNull(GraphQLID) },
        amount: { type: new GraphQLNonNull(GraphQLInt) },
        effectiveDate: { type: new GraphQLNonNull(GraphQLDate) },
        incrementDate: { type: new GraphQLNonNull(GraphQLDate) },
        incrementPercentage: {
          type: new GraphQLNonNull(GraphQLFloat),
        },
      },
      resolve: (parent, args) => CreateSalary(parent, args),
    },
    updateSalary: {
      type: GraphQLString,
      description: "Update User's Salary",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        employeeId: { type: GraphQLID },
        amount: { type: GraphQLInt },
        effectiveDate: { type: GraphQLDate },
        incrementDate: { type: GraphQLDate },
        incrementPercentage: {
          type: GraphQLFloat,
        },
      },
      resolve: (parent, args) => UpdateSalary(parent, args),
    },
    deleteSalary: {
      type: GraphQLString,
      description: "Delete User's Salary",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteSalary(parent, args),
    },

    // Attendance:
    createAttendance: {
      type: AttendanceType,
      description: "Create new Attendance",
      args: {
        employeeId: { type: new GraphQLNonNull(GraphQLID) },
        date: { type: new GraphQLNonNull(GraphQLDate) },
        inTime: { type: new GraphQLNonNull(GraphQLLocalTime) },
        outTime: { type: new GraphQLNonNull(GraphQLLocalTime) },
        publicHoliday: {
          type: new GraphQLNonNull(GraphQLBoolean),
        },
        tourHoliday: {
          type: new GraphQLNonNull(GraphQLBoolean),
        },
        weekend: {
          type: new GraphQLNonNull(GraphQLBoolean),
        },
        leave: {
          type: new GraphQLNonNull(GraphQLBoolean),
        },
      },
      resolve: (parent, args) => CreateAttendance(parent, args),
    },
    updateAttendance: {
      type: GraphQLString,
      description: "Update User's Attendance",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        employeeId: { type: GraphQLID },
        date: { type: GraphQLDate },
        inTime: { type: GraphQLLocalTime },
        outTime: { type: GraphQLLocalTime },
        publicHoliday: {
          type: GraphQLBoolean,
        },
        tourHoliday: {
          type: GraphQLBoolean,
        },
        weekend: {
          type: GraphQLBoolean,
        },
        leave: {
          type: GraphQLBoolean,
        },
      },
      resolve: (parent, args) => UpdateAttendance(parent, args),
    },
    deleteAttendance: {
      type: GraphQLString,
      description: "Delete User's Attendance",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteAttendance(parent, args),
    },

    // Project:
    createProject: {
      type: ProjectType,
      description: "Create new Project",
      args: {
        resourcesAllocated: {
          type: new GraphQLNonNull(new GraphQLList(GraphQLID)),
        },
        bdId: { type: new GraphQLNonNull(GraphQLID) },
        teamLeadId: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        startDate: { type: new GraphQLNonNull(GraphQLDate) },
        endDate: { type: new GraphQLNonNull(GraphQLDate) },
        status: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        clientName: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        platform: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        clientRegion: { type: new GraphQLNonNull(GraphQLNonEmptyString) },
        hourlyFlag: { type: new GraphQLNonNull(GraphQLBoolean) },
        fixedFlag: { type: new GraphQLNonNull(GraphQLBoolean) },
        fixedAmount: { type: new GraphQLNonNull(GraphQLInt) },
        hourlyRate: { type: new GraphQLNonNull(GraphQLFloat) },
        b2bFlag: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: (parent, args) => CreateProject(parent, args),
    },
    updateProject: {
      type: GraphQLString,
      description: "Update User's Project",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        resourcesAllocated: { type: new GraphQLList(GraphQLID) },
        bdId: { type: GraphQLID },
        teamLeadId: { type: GraphQLID },
        name: { type: GraphQLNonEmptyString },
        startDate: { type: GraphQLDate },
        endDate: { type: GraphQLDate },
        status: { type: GraphQLNonEmptyString },
        clientName: { type: GraphQLNonEmptyString },
        platform: { type: GraphQLNonEmptyString },
        clientRegion: { type: GraphQLNonEmptyString },
        hourlyFlag: { type: GraphQLBoolean },
        fixedFlag: { type: GraphQLBoolean },
        fixedAmount: { type: GraphQLInt },
        hourlyRate: { type: GraphQLFloat },
        b2bFlag: { type: GraphQLBoolean },
      },
      resolve: (parent, args) => UpdateProject(parent, args),
    },
    deleteProject: {
      type: GraphQLString,
      description: "Delete User's Project",
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => DeleteProject(parent, args),
    },
  },
});
module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
