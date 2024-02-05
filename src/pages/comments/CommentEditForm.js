import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Notification from "../../components/Notification";

function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments,} = props;

  const [formContent, setFormContent] = useState(content);
  const [notification, setNotification] = useState(null);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
      setNotification({ message: "Comment edited successfully!", variant: "success" });

      
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    } catch (err) {
      console.log(err);
      setNotification({ message: "Error editing comment", variant: "error" });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="pr-1">
          <Form.Control
            className={styles.Form}
            as="textarea"
            value={formContent}
            onChange={handleChange}
            rows={2}
          />
        </Form.Group>
        <div className="text-right">
          <button
            className={styles.Button}
            onClick={() => setShowEditForm(false)}
            type="button"
          >
            cancel
          </button>
          <button
            className={styles.Button}
            disabled={!content.trim()}
            type="submit"
          >
            save
          </button>
        </div>
      </Form>
      {notification && (
        <Notification
          message={notification.message}
          onClose={() => setNotification(null)}
          variant={notification.variant}
        />
      )}
    </>
  );
}

export default CommentEditForm;