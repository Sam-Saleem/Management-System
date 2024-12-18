import { gql } from "@apollo/client";

const loginUser = gql`
  mutation ($email: NonEmptyString!, $password: NonEmptyString!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        name
        email
        roleId
        cnic
      }
    }
  }
`;

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const getAllUsers = gql`
query{
users {
    id
    shiftId
    roleId
    departmentId
    employeeId
    name
    mobileNo
    cnic
    email
    password
    address
    jobTitle
    hireDate
    dob
    status
    leaves
    availableLeaves
    commissionFlag
    commissionPercentage   
    # createdAt
    # updatedAt
  }
}
`
export { loginUser,getAllUsers };
