import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import CommentCreateForm from "../../pages/comments/CommentCreateForm";

test('Creates a new Comment on a Post', () => {


  render(
    <Router>
      <CurrentUserProvider>
        <CommentCreateForm />
      </CurrentUserProvider>
    </Router>
  );

  const commentInput = screen.getByPlaceholderText('my comment...');
  const createButton = screen.getByText('post');

  fireEvent.change(commentInput, { target: { value: 'Test Comment' } });
  fireEvent.click(createButton);

});

