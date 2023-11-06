import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";
import SignInForm from "../../pages/auth/SignInForm";
import SignUpForm from "../../pages/auth/SignUpForm";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("Profile");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders link to the FEED for a logged in user", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );
  
    const feed = await screen.findByText("Feed");
    expect(feed).toBeInTheDocument();
  });

test("renders link to the Liked for a logged in user", async () => {
render(
    <Router>
    <CurrentUserProvider>
        <NavBar />
    </CurrentUserProvider>
    </Router>
);

const liked = await screen.findByText("Liked");
expect(liked).toBeInTheDocument();
});

test("renders link to the Top for a logged in user", async () => {
    render(
        <Router>
        <CurrentUserProvider>
            <NavBar />
        </CurrentUserProvider>
        </Router>
    );
    
    const top = await screen.findByText("Top");
    expect(top).toBeInTheDocument();
    });


test("renders Sign in and Sign up buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  fireEvent.click(signOutLink);

  const signInLink = await screen.findByRole("link", { name: "Sign in" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });

  expect(signInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});


test("Rendering Sign In form, entering credentials and logging in", async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <SignInForm />
            </CurrentUserProvider>
            
        </Router>
    );
 
    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');
    const signInButton = screen.getByText('Sign in');
  
    fireEvent.change(usernameInput, { target: { value: 'Username' } });
    fireEvent.change(passwordInput, { target: { value: 'Password' } });
    fireEvent.click(signInButton);
  
    
  });

test("Rendering Sign Up form, enters credentials and signs up.", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <SignUpForm />
      </CurrentUserProvider>
    </Router>
  );
  
  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const confirmPasswordInput = screen.getByPlaceholderText('Confirm password');
  const signUpButton = screen.getByText('Sign up');

  fireEvent.change(usernameInput, { target: { value: 'Username' } });
  fireEvent.change(passwordInput, { target: { value: 'Password' } });
  fireEvent.change(confirmPasswordInput, { target: { value: 'Confirm password' } });
  fireEvent.click(signUpButton);
});



