import React from "react";
import Comment from "./Comment";
const commentsData = [
  {
    name: "yash",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [],
      },
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [],
      },
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [],
      },
    ],
  },
  {
    name: "yash",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "yash",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [],
      },
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [],
      },
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [],
      },
    ],
  },
  {
    name: "yash",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "yash",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "yash",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "yash",
            text: "Lorem ipsum dolor",
            replies: [
              {
                name: "yash",
                text: "Lorem ipsum dolor",
                replies: [],
              },
              {
                name: "yash",
                text: "Lorem ipsum dolor",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="my-1">
      <Comment data={comment}></Comment>
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
