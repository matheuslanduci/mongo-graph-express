import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
} from "graphql";

import { GraphQLDate } from "graphql-iso-date";

import Employee from "../models/employees";
import Sector from "../models/sector";

const EmployeeType = new GraphQLObjectType({
  name: "Employees",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    corporateID: {
      type: GraphQLInt
    },
    birthDate: {
      type: GraphQLDate
    },
    name: {
      type: GraphQLString
    },
    photo: {
      type: GraphQLString
    },
    occupation: {
      type: GraphQLString
    },
    salary: {
      type: GraphQLFloat
    },
    sector: {
      type: GraphQLString
    }
  })
});

const SectorType = new GraphQLObjectType({
  name: "sectors",
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent, args) {
        return Employee.find({
          sector: parent.name
        });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    employee: {
      type: EmployeeType,
      args: {
        corporateID: {
          type: GraphQLInt
        }
      },
      resolve(parent, args) {
        return Employee.findOne({ corporateID: args.corporateID });
      }
    },
    sector: {
      type: SectorType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve(parent, args) {
        return Sector.findById(args.id);
      }
    },
    employees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent, args) {
        return Employee.find();
      }
    },
    sectors: {
      type: new GraphQLList(SectorType),
      resolve(parent, args) {
        return Sector.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        corporateID: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        birthDate: {
          type: new GraphQLNonNull(GraphQLDate)
        },
        photo: {
          type: new GraphQLNonNull(GraphQLString)
        },
        occupation: {
          type: new GraphQLNonNull(GraphQLString)
        },
        salary: {
          type: new GraphQLNonNull(GraphQLFloat)
        },
        sector: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const employee = new Employee({
          corporateID: args.corporateID,
          name: args.name,
          birthDate: args.birthDate,
          photo: args.photo,
          occupation: args.occupation,
          salary: args.salary,
          sector: args.sector
        });
        return employee.save();
      }
    },
    addSector: {
      type: SectorType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const sector = new Sector({
          name: args.name,
          description: args.description
        });
        return sector.save();
      }
    },
    removeEmployee: {
      type: EmployeeType,
      args: {
        corporateID: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(parent, args) {
        return Employee.findOneAndDelete({ corporateID: args.corporateID });
      }
    },
    removeSector: {
      type: SectorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        }
      },
      resolve(parent, args) {
        return Sector.findByIdAndDelete(args.id);
      }
    },
    updateEmployee: {
      type: EmployeeType,
      args: {
        corporateID: {
          type: new GraphQLNonNull(GraphQLInt)
        },
        name: {
          type: GraphQLString
        },
        birthDate: {
          type: GraphQLDate
        },
        photo: {
          type: GraphQLString
        },
        occupation: {
          type: GraphQLString
        },
        salary: {
          type: GraphQLFloat
        },
        sector: {
          type: GraphQLString
        }
      },
      async resolve(parent, args) {
        const employee = await Employee.findOne({
          corporateID: args.corporateID
        });
        return Employee.findOneAndUpdate(
          { corporateID: args.corporateID },
          {
            name: args.name || employee.name,
            birthDate: args.birthDate || employee.birthDate,
            photo: args.photo || employee.photo,
            occupation: args.occupation || employee.occupation,
            salary: args.salary || employee.salary,
            sector: args.sector || employee.sector
          }
        );
      }
    },
    updateSector: {
      type: SectorType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID)
        },
        name: {
          type: GraphQLString
        },
        description: {
          type: GraphQLString
        }
      },
      async resolve(parent, args) {
        const sector = await Sector.findById(args.id);
        return Sector.findByIdAndUpdate(args.id, {
          name: args.name || sector.name,
          description: args.description || sector.description
        });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
