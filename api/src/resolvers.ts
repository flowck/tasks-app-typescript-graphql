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
  }
}
