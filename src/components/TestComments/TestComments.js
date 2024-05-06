import React, { useEffect, useState } from "react";
import { api } from "../../api/api.js";
import {
  POST,
  DELETE,
  PUT,
  UPDATE,
  REMOVE,
  PATCH,
} from "../../api/constants.js";
import { v4 as uuidv4 } from "uuid";
// import { getEl, uuid } from "../../api/helpers.js";

export const TestComments = () => {
  // Получить все комментарии
  const [comments, setComments] = useState([]);

  // const getCommentById = (id) => comments.find((comment) => comment.id === id);

  async function getComments() {
    let comments = await api();

    setComments(comments);
  }

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);

  // Создание нового комментария
  const emptyComment = {
    id: uuidv4(),
    text: "",
    name: "",
    date: new Date(),
  };

  const [comment, setComment] = useState(emptyComment);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    api(POST, comment).then((res) => {
      setComments([...comments, res]);
      setComment(emptyComment);
    });
  };

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <span>{comment.text}</span>
            <button
              onClick={() => {
                api(PATCH, { id: comment.id, text: "Updated comment" }).then(
                  () => {
                    getComments();
                  }
                );
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                api(DELETE, { id: comment.id }).then(() => {
                  getComments();
                });
              }}
            >
              Delete {comment.id}
            </button>
          </div>
        );
      })}

      <form onSubmit={handleCommentSubmit}>
        <span>ФИО</span>
        <input
          type="text"
          value={comment.name}
          onChange={(e) => setComment({ ...comment, name: e.target.value })}
        />
        <span>Комментарий</span>
        <input
          type="text"
          value={comment.text}
          onChange={(e) => setComment({ ...comment, text: e.target.value })}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};
