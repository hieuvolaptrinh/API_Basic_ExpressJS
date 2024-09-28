const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const { customerSchema } = require("./customer"); // Import schema từ đối tượng xuất ra
const { userSchema } = require("./user"); // Import schema từ đối tượng xuất ra
//shape data

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfor: customerSchema,
    usersInfor: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    leader: userSchema,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

// Override all methods
delete mongoose.models.Project;
const Project = mongoose.model("Project", projectSchema);
projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });

module.exports = { Project, projectSchema };
// const customerSchema = new mongoose.Schema(
//     {
//         name: String,
//         phone: String,
//         email: String,
//     }
// );

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String
// });
