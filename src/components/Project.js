import React from "react";
import {
    Link
} from "react-router-dom";
export default function Project() {
    return (
        <div className="project-content">
            <div className="para">
                <a href="https://github.com/mohits1005/node-chat-app">
                    <span className="project-title">
                        RealTime Chat Application
          </span>
                </a>&nbsp;:&nbsp;
        <span className="project-desc">
                    Made with Socket IO node library for real time chat updates. (JS, Node, Mongo)
        </span>
            </div><br />
            <div className="para">
                <a href="https://github.com/mohits1005/trello-react-clone">
                    <span className="project-title">
                        Trello Clone
          </span>
                </a>&nbsp;:&nbsp;
        <span className="project-desc">
                    Can create JIRA boards and manage tasks/subtasks. (React, Node, Mongo)
        </span>
            </div><br />
            <div className="para">
                <a href="https://github.com/mohits1005/nodeJS/tree/master/test%20node">
                    <span className="project-title">
                        Secure content upload/access
          </span>
                </a>&nbsp;:&nbsp;
        <span className="project-desc">
                    Supports JWT and cloudfront URL creation to secure content access. (Node, Mongo, AWS)
        </span>
            </div><br />
            <div className="para">
                <a href="https://github.com/mohits1005/reactjs/tree/master/forum_app">
                    <span className="project-title">
                        Custom Blog App
          </span>
                </a>&nbsp;:&nbsp;
        <span className="project-desc">
                    Create and display posts for blog. Integrated with custom comments and replies system. (React)
        </span>
            </div><br />
        </div>
    );
}