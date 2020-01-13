import * as Models from "./models";

export default {
  Query: {
    hello: () => "Hello world",
    tasks: async () => {
      try {
        const data = await Models.tasks.findAll();
        return data;
      } catch(error) {
        return error;
      }
    }
  },
  Mutation: {
    async createTask(parent, args) {
      try {
        const newTask = await Models.tasks.create({
          title: args.title,
          description: args.description,
          user_id: args.user_id,
          status: false
        });

        return newTask;
      } catch(error) {
        return error;
      }
    },
    async updateTaskStatus(parent, args) {
      try {
        const updatedTask = await Models.tasks.update(
          {
            status: args.status
          },
          { 
            where: { id: args.task_id },
            returning: true
          }
        );
  
        const getTask = await Models.tasks.findByPk(args.task_id);

        return getTask;
      } catch(error) {
        return error;
      }
    }
  }
}
