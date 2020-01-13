import { gql } from "apollo-boost";
export const TASKS = gql`
  {
    tasks { 
      id,
      title,
      description
    }
  }
`;