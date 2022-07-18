import React from "react";
import { PostComment } from "../PostComment";
export const PostComments = ({
  postMessages,
  loggedIn,
  postId,
  serverURL,
  username,
}) => {
  return (
    <div className="container post-comments">
      {postMessages.length > 0
        ? postMessages.map((m) => (
            <PostComment
              message_username={m.username}
              message={m.message}
              replies={m.replies}
              loggedIn={loggedIn}
              postId={postId}
              serverURL={serverURL}
              messageId={m.message_id}
              username={username}
            />
          ))
        : ""}
    </div>
  );
};
