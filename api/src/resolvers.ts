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
    }
  }
}
