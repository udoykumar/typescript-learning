//union

type userRole = "admin" | "user" | "guest";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "admin dashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else if (role === "guest") {
    return "guest is here";
  } else {
    return "not founds";
  }
};
console.log(getDashboard("guest"));

// intersection type &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};
type EmployeeManager = Employee & Manager;

const chowdhuryShaheb: EmployeeManager = {
  id: "1223",
  name: "chowdhuryShaheb",
  phoneNo: "1247",
  designation: "group",
  teamSize: 12,
};
