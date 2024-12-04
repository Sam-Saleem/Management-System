const { db } = require("../db/models");
const { Salary_Slip, Salary, User } = db;

const GetAllSalarySlips = async () => {
  try {
    const salarySlips = await Salary_Slip.findAll({});
    return salarySlips;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

const GetSalarySlipById = async (parent, args) => {
  try {
    const salarySlip = await Salary_Slip.findOne({
      where: { id: args.id },
    });
    return salarySlip;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

const CreateSalarySlip = async (parent, args) => {
  try {
    const salarySlip = await Salary_Slip.create(args);
    return salarySlip;
  } catch (err) {
    console.error("-------->", err.parent.message);
    if (err.parent.code === "23505") {
      throw Error(err.errors[0].message);
    } else if (err.parent.code === "23503") {
      throw Error(err.parent.detail);
    } else {
      throw Error(err);
    }
  }
};

const UpdateSalarySlip = async (parent, args) => {
  try {
    const { id, ...data } = args;

    if (Object.keys(data).length) {
      const [updated] = await Salary_Slip.update(data, {
        where: { id },
      });
      if (updated) {
        return "Salary Slip updated successfully!";
      } else {
        throw Error("Please provide the correct id.");
      }
    } else {
      throw Error("Pleasde provide the data to update.");
    }
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

const DeleteSalarySlip = async (parent, args) => {
  try {
    const { id } = args;
    const salarySlip = await Salary_Slip.destroy({
      where: { id },
    });
    if (salarySlip) {
      return "Salary Slip deleted successfully!.";
    } else {
      throw Error("Please provide the correct id.");
    }
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

const GenerateSalarySlip = async (parent, args) => {
  try {
    //  salary: { type: new GraphQLNonNull(GraphQLFloat) },
    //     overtime: { type: new GraphQLNonNull(GraphQLFloat) },
    //     date: { type: new GraphQLNonNull(GraphQLDate) },
    //     totalPay: { type: new GraphQLNonNull(GraphQLFloat) },
    const { employeeId } = args;
    const employeeSalary = await User.findOne({
      where: { id: employeeId },
      include: { all: true },
    });
    console.log(">>>>>>>>>>>>>>>>>>", employeeSalary);
    console.log(">>>>>>>>>>>>>>>>>>", employeeSalary.Salary.amount);
    const date = new Date().toISOString().split("T")[0];
    const salary = employeeSalary.Salary.amount;
  } catch (err) {
    console.error(err);
    throw Error(err);
  }
};

module.exports = {
  GetAllSalarySlips,
  GetSalarySlipById,
  CreateSalarySlip,
  UpdateSalarySlip,
  DeleteSalarySlip,
  GenerateSalarySlip,
};
