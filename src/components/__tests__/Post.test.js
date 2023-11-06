import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import PostCreateForm from "../../pages/posts/PostCreateForm";

test('Creates a new post with all fields filled out', () => {


  render(
    <Router>
      <CurrentUserProvider>
        <PostCreateForm />
      </CurrentUserProvider>
    </Router>
  );

  const titleInput = screen.getByPlaceholderText('Enter the title here');
  const contentInput = screen.getByPlaceholderText('Write your content here');
  const categoryDropdown = screen.getByRole('combobox');
  const createButton = screen.getByText('create');


  fireEvent.change(titleInput, { target: { value: 'Test Post Title' } });
  fireEvent.change(contentInput, { target: { value: 'Test Post Content' } });
  fireEvent.change(categoryDropdown, { target: { value: 'HTML' } });


  fireEvent.click(createButton);

});

