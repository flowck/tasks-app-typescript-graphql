import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { TASKS } from "./schemas";

export default () => {

  const { data } = useQuery(TASKS);

  return (
    <div className="app">
      <div className="task-form">
        <input type="text" placeholder="New task" />
        <button>Save</button>
      </div>
      <div className="task-list">
        {
          data.tasks.map((task: any) => {
            return (
              <div>
                <h1>{ task.title }</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}