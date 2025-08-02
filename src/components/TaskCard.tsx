import React from "react";
import type { TaskCardProps } from "../libs/types";

const TaskCard: React.FC<TaskCardProps> = ({ title, description, isDone }) => (
  <div className="card mb-3">
    <div className="card-body">
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
          <p className="card-text">{description}</p>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
          <button
            className={`btn btn-sm ${
              isDone ? "btn-success" : "btn-outline-secondary"
            } me-2`}
          >
            {isDone ? "Done" : "Mark Done"}
          </button>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
          <button className="btn btn-sm btn-danger">Delete</button>
        </div>
      </div>
    </div>
  </div>
);

export default TaskCard;
