<h2> Final Resubmission
<hr>
<p>Here's my improved and updated final resubmission of the project titled - <strong>Coding Nexus</strong> - "One Line At a Time"<p>
<p>To make the resubmission process easier for all involved parties I once again present the problems found in the previous submission attempt with my approach of how I fixed the problems. Unfortunately the second submission attempt failed as well and hopefully this one will do ! </p>
<p>Here's the upload of the last evaluation:<p>
<a href="https://drive.google.com/file/d/1rFzzaXr88gx-QwIKq7UZZeIQNv8Rfjq4/view?usp=sharing">Link to Google Drive</a>
<hr>
<p>And more concise step by step breakdown of the problems.

<hr>

LO1

1. On mobile screens, the leaderboard page presents an issue where the black background disappears as the user scrolls down the page. This causes the white text to become unreadable against the white background, affecting user visibility and readability. The leaderboard UX should be addressed on small devices so that all content is legible. 
<br>
<br>
At first I couldn't find the problem with the page and I think that's how it slipped my attention at previous submission attempt, but when the screen is reduced and at the same time the  text is zoomed in enough the background indeed disappears. To fix this I added the globas css file to the leaderboard.js and improved the css file itself, adding the media signature, specifying the background and decreasing the font size as well for the smaller screens.
<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/dJJkVyC/1-leaderboard-fix.png" alt="1-leaderboard-fix" border="0"></a>


<br>
<hr>
<br>


LO2
The "Reusable React components" section is present in the readme that highlights the component reusability for this application. However, it would be great to list the functionality served by each component and how that component is reused to serve similar functionality across the application thus saving the need to rewrite the code. We can also link the component reusability to improvements in the user experience that have been achieved by using the React library. 
<br>
<br>
<p>I have to admit that the project was almost finished when I came across the problem that I have to include reusability component. By striving to include more and more different solutions in the project to display the aquired knowledge from Code Institute the fact to re use something to enhace the project became an afterthought. The leaderboard section of the project was already finished when I started to "slice it and dice it" to cut out functions and refactor them so that they can be used elsewhere in the project. However this doesn't change the fact that they can be implemented across the website, "Most Followed Users" and "Most Liked Posts" are such an neutral but informative topic, that they wouldn't be out of place in Profile Menu or After the comment sections in Post page to promote community engagement. 
<br>
<br>
1) Most Followed Users : 
<br>
<a href="https://ibb.co/GkY9QmF"><img src="https://i.ibb.co/gwqdZY6/comments-added.png" alt="comments-added" border="0"></a>
<br>
<p>The component is an module designed to fetch , process and discplay information about the top 5 most followed users on the platform. It leverages React hooks (useState and useEffect) to manage state and handle asynchronous data fetching.</p>
<p>It initializes the state and fetches data from "https://finals-api-4952a1f1f072.herokuapp.com/profiles"</p>
<p> It checks if the expected data structure is an array and maps the raw profile data to a more usable format. Sorts profiles by the follower count and slices the first 5 users with the highest count and stores it. Before rendering the bullet list with user avatar picture, name and follower count attached.</p>
<br>
2) Most Liked Posts 
<br>
<br>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/NyWwM75/2.png" alt="2" border="0"></a>
<br>
<p>This component is designed to use the map method to sorts through the most liked posts rendering the list item for each entry creating a hyperlink with title of the post and number of the likes it has. </p>
<br>
To use these components elsewhere in the project. Import to component : 
<br>
<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/smZpp3s/import-1.png" alt="import-1" border="0"></a>

<br>
And include the component in the JSX file :
<br>
<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/w0cp4FD/import-2.png" alt="import-2" border="0"></a>

<br>
<hr>
<br>
LO3
<br>
<p>For the API readme, it is templated but the API manual testing details are added in the front-end readme. The API deployment steps are also added there. It would be great to customize the backend readme with API-related information.</p>
<br>
<br>
<p>API Readme file updated : <a href="https://github.com/MikeMaroni9/api-finals">Link To API</a></p>

<hr>






1.6	No	Sensitive information exists in the repository, leading to security issues.
Other than this, the env.py file is present in the front-end codebase that contains the DATABASE_URL, SECRET_KEY, etc. which should be hidden from the users. 

The env.py needs to be hidden from the users. 

In addition, the env.py present in the front-end repository contains security-sensitive information that needs to be hidden from the users. 




LO3
The backend is powered by the Django Rest Framework and the codebase contains multiple models. However, these models are dependent on the course walkthrough project and need to be customized for this particular project.  
Merit Criteria 
The CRUD operations are supported on the UI but the notifications are missing. Regarding the backend, it is developed using the DRF but lacks customizations in the models. 

Overall, this application demonstrates a decent understanding of React component-based architecture to develop a front end that supports CRUD operations on the UI. However, the notifications for these operations need to be displayed.  The readme should map the project goals and components to the relevant user stories. With these enhancements, the project will be on its way to realizing its full potential.


<hr>


<h3> Second Resubmission 
<h3>Intro</h3>
<hr>
<p>Here's my improved and updated resubmission of the project titled - <strong>Coding Nexus</strong> - "One Line At a Time"
<br>
<br>
Blog type application where a registered user can create a new posts, or comment on already existing ones.
<br><br>
Unfortunately my first submission failed leaving room for improvement.</p>
<a href="https://drive.google.com/file/d/1hD6EtPNtpwFe8BjXPJ5c3IS7i1mv_aKB/view?usp=sharing">Evaluation Details</a>
<br>
<br>
<p>Most of the project passed the criteria so I focused only on improving the topics that were hightlighted to me. Without changing the core of the project.</p>
<p>Here's the list of comments with my solutions added underneath. </p>
<hr>
<br>

1. (1.5) Deployment section is present but it exposes the Django secret key which needs to be hidden from the user.
<br>
2.(1.6) Sensitive information exists in the repository, leading to security issues.
In the project's documentation, specifically in the "Readme" under the deployment section at 
“8. Adjusting env.py and settings.py files”, there is a significant security lapse. The application’s secret key is exposed in a screenshot. This is 
a major concern as secret keys are vital for maintaining the security integrity of an application. Exposing such sensitive information in publicly accessible documentation can lead to severe security vulnerabilities, including but not limited to unauthorized access, data breaches, and potential exploitation of the application’s backend systems.
 <br>
 <br>
<a href="https://ibb.co/VCKGrLb"><img src="https://i.ibb.co/dphv1fX/8.png" alt="8" border="0"></a>
<br>
IMG file has been updated, posted here and updated/replaced in the original location in the readme file.
<br>
<hr>
<br>
4. There is currently no main title for the application, with simply 'React App' appearing as the title.
<br>
<br>
<p> Title : "Coding Nexus" added to the project"
<br>
<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/5Tp1dzr/coding-nexus-title.png" alt="coding-nexus-title" border="0"></a>
<br>
<br>
<a href="https://ibb.co/r2tKh1Y"><img src="https://i.ibb.co/0yXpLdT/coding-nexus-title-2.png" alt="coding-nexus-title-2" border="0"></a>
<br>
<a href="https://ibb.co/ZLr4wSF"><img src="https://i.ibb.co/0DL4WK6/coding-nexus-title-3.png" alt="coding-nexus-title-3" border="0"></a>
<br>
<br>
<hr>
<br>
5. The design created with Canva is present in the readme along with the color details. However, it would be great to include the font specifications as well. 

<br>
Fonts : "DM Sans" & "sans serif" 
<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/ss0kSj0/font-usage.png" alt="font-usage" border="0"></a>
<br>
I chose the "DM Sans" font as the main font for its modern and clean aesthetic, which aligns well with the overall design principles of the project. "DM Sans" offers a pleasing readability and a contemporary feel, making it suitable for various screen sizes and resolutions.
To ensure a robust and consistent user experience across different devices and browsers, I've designated a sans-serif font as a fallback option. This means that if, for any reason, "DM Sans" is unavailable or not supported, the browser will default to a generic sans-serif font. 
<br>
<hr>
<br>

6.Regarding the leaderboard page, the current implementation where content opens in a new tab can disrupt the user’s navigation flow. Typically, users expect content to open in the same tab unless there is a specific reason to do otherwise. Altering this behavior so that the content opens in the same tab would provide a more seamless and intuitive browsing experience.
<br>
<br>
<p> target ="_blank" has been removed from generated lists. All of them will now open in the same page.</p>
<br>
<hr>
<br>

7.To personalize the user experience, we can replace the ‘Profile’ label with the username.
<br>
<br>
<p> Code has been updated:
<br> 
<br> 
<a href="https://ibb.co/r4WWpwF"><img src="https://i.ibb.co/KF11srb/profile-navbar-update.png" alt="profile-navbar-update" border="0"></a>
<br>
<hr>
<br>

8.Lastly, after editing a post record, if the user deletes that record, it redirects the user to the record’s edit URL which should not be the case.
<br>
<br>
<p> Code has been updated:
<br>
<br>
<a href="https://ibb.co/YLPRgBH"><img src="https://i.ibb.co/nL6gpMx/historypush.png" alt="historypush" border="0"></a>
<hr>
9. (1.9) The hamburger menu is not visible on mobile screen sizes due to a matching color with the background. A crucial point of concern is the visibility of the hamburger menu on mobile devices. Currently, the menu icon blends with the background color, making it difficult for users to locate and access the menu.
<br>
<br>
<p> Code has been updated:
<br>
<p> I have changed the color of the Burger Icon to match rest of the navigation bar and also added and installed "https://hamburger-react.netlify.app/" to add a bit of a flair to the NavBar with a slight animation. 
<br>
<br>
Process of installation : npm install hamburger-react / import { Sling as Hamburger } from 'hamburger-react'
<br>

<br>
<a href="https://ibb.co/khJBDxP"><img src="https://i.ibb.co/2jShMyp/toggle1.png" alt="toggle1" border="0"></a>
<br>
<br>
<a href="https://ibb.co/Mc7TXx7"><img src="https://i.ibb.co/JvHLhwH/toggle2.png" alt="toggle2" border="0"></a>
<br>
<br>
<hr>
10. (2.5) Agile methodologies have been implemented, however they can be expanded on. 
Eg. By:  
    1) Segmenting the development process into sprints, with a dedicated GitHub project for each sprint. 
    2) Additionally user stories can be prioritised following the MoSoCow method through the use of GitHub labels and 
    3) clear acceptance criteria identified for each issue.


The agile development tools - GitHub issues and project board - are used for agile project management but there is room for improvement. The description is present for user stories but the tasks and acceptance criteria are not defined for them. 
The labels are not created using the MoSCoW method and assigned to define the priority of the user stories. However, the milestones are created for mapping epics and then associating user stories with them.

Furthermore, for agile project management, the tasks and acceptance criteria need to be defined for user stories and their priority should be defined via the labels created by the MoSCoW method. Addressing these areas of improvement will contribute to further enhancing the project's functionality, user experience, and overall quality.
<br>
<p> Content has been updated:
<br>
<br>
Acceptance Criteria added to all user stories: 
<br>
<br>
<a href="https://ibb.co/fx8jm0R"><img src="https://i.ibb.co/5RYbqcD/navbar.png" alt="navbar" border="0"></a><br />
<br>
<br>
Labels have been created using MoSCoW Prioritization. All user stories have been divided based on importance in the project.
<br>
<a href="https://ibb.co/mzd168b"><img src="https://i.ibb.co/9YBzstc/moscow.png" alt="moscow" border="0"></a>
<br>
<br>
<a href="https://ibb.co/ph5XXrg"><img src="https://i.ibb.co/WVjKKpQ/moscow-2.png" alt="moscow-2" border="0"></a>
<br>
<br>
<br>

<hr>

11.In the reusable components section, the screenshots of the code are added. It would be better to instead include a description of the components that have been created and reused for this application. 
When discussing reusable components, descriptions should replace code screenshots for clarity.
<br>
<br>
<p> Code has been updated and comments added:
<br>
<br>
<br>
mostLikedPosts is an array of post objects, and renders a simple list of the most liked posts. Each list item displays the post title, number of likes, and includes a hyperlink to the post's URL.
<br>
<br>

<a href="https://imgbb.com/"><img src="https://i.ibb.co/NyWwM75/2.png" alt="2" border="0"></a>
<br>
<br>
MostFollowedUsers : utilizes the useState and useEffect hooks to fetch data from an API endpoint containing user profiles. The component then processes the data to identify the most followed users, displaying their information in a list with their username, follower count, and a profile image.
<br>
<br>
<a href="https://ibb.co/GkY9QmF"><img src="https://i.ibb.co/gwqdZY6/comments-added.png" alt="comments-added" border="0"></a>
<br>
<hr>

12.(3.10)	No	Manual testing steps are missing or lacking in any meaningful detail for the Back-End application
<br>
<br>
<br>
Code Updated: 
<br>
<br>
<br>
Coverage installed for the back end API project and automated tests added. Pip freeze used to add it to requirements file. Currently at 92% coverage, will work on it some more if I got some time left over at the end. The Holiday season is hectic around here. 
<br>
<br>
<a href="https://ibb.co/vzshcNH"><img src="https://i.ibb.co/Bs4Gfht/Screenshot-2023-12-16-195958.png" alt="Screenshot-2023-12-16-195958" border="0"></a>
<br>
<br>
<a href="https://ibb.co/FHYrJWh"><img src="https://i.ibb.co/bbv0L36/Screenshot-2023-12-16-203500.png" alt="Screenshot-2023-12-16-203500" border="0"></a>
<br>
<br>
<br>
<h2>Manual Testing of the API :</h2>
<br>
<br>

Account
<ol>
   <li>Registration</li>
   <ul>
      <li> Expected - Creation of a new user through : https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/dj-rest-auth/registration/</li>
      <li> Testing - Entry of a new username and password for registration </li>
      <li> Successful - HTTP 201 Created</li>
   </ul>
      <ul>
      <li> Expected - Wrong password input. Creation of a new user through : https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/dj-rest-auth/registration/</li>
      <li> Testing - Entry of a new username and password for registration with second password being incorrect. </li>
      <li> Failure - HTTP 400 Bad Request (    "non_field_errors": [
        "The two password fields didn't match.")</li>
   </ul>
      <li>Login</li>
   <ul>
      <li> Expected - Login successful through https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/api-auth/login/?next=/dj-rest-auth/registration/</li>
      <li> Testing - Tested the feature by inputting previously created user details. </li>
      <li> The redirect takes to the confirmation screen - HTTP 200 OK</li>
   </ul>
   </li>
   <li>Logout</li>
   <ul>
      <li>Expected - Pressing log out button the user disconnects from the platform.</li>
      <li>Testing - Tested the feature by presing Logout button</li>
      <li>The user is logged out and page redirect takes to the HTTP 200 OK</li>
   </ul>
</ol>
Posts
<br>
<br>
<ol>
   <li>New Post</li>
   <ul>
      <li>Expected - Creation of new post from https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/posts/</li>
      <li>Testing - Creation of new post by inputting Title/Content/Category filter</li>
      <li>The redirect takes to the Post List. HTTP 201 Created.</li>
   </ul>
   <li>Editing the post</li>
   <ul>
      <li>Expected - Using the post id, editing the post through : https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/posts/13/</li>
      <li>Testing - Updating input field and pressing confirm.</li>
      <li>The post has been updated - HTTP 200 OK</li>
   </ul>
   <li>Deleting the post</li>
   <ul>
      <li>Expected - From post ID page, deleting the post.</li>
      <li>Testing - Tested the feature by pressing the delete button</li>
      <li>Confirmation Screen, Acknowledgment. Post has been deleted. HTTP 204 No Content</li>
   </ul>
</ol>
<br>
Comments 
<br>
<br>
<ol>
   <li>Add Comment</li>
   <ul>
      <li>Expected - leaving a comment underneath the post.</li>
      <li>Testing - Navigating to the page, choosing post in drop down menu and leaving a comment. https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/comments/</li>
      <li>Redirects to Comments List. HTTP 201 Created</li>
   </ul>
   <li>Editing Comment</li>
   <ul>
      <li>Expected - Ability to edit the comments by altering fields.</li>
      <li>Testing - Navigating to the comments url followed by comments ID, altering the fields. https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/comments/2/</li>
      <li>Redirects to Comments List. HTTP 201 Created</li>
   </ul>
   <li>Add comment</li>
   <ul>
      <li>Expected - Deleting the comment.</li>
      <li>Testing - Navigating to the comments url followed by comments ID, pressing the dedicated delete button. https://8000-mikemaroni9-apifinals-hj02g1gprxu.ws-eu107.gitpod.io/comments/2/</li>
      <li>Pop up window asking for acknowledgment, confirmation, redirect, HTTP 204 No Content </li>
   </ul>
</ol>
Likes
<ol>
<br>
<br>
   <li>Liking a Post</li>
   <ul>
      <li>Expected - Leaving a like under the post</li>
      <li>Testing - Navigating to likes/ choosing a post from the drop down list. And pressing POST.</li>
      <li>Redirect. HTTP 201 Created. </li>
   </ul>
   <li>Checking for duplicates</li>
   <ul>
      <li>Expected - Leaving a second like under the post</li>
      <li>Testing - Navigating to likes/ choosing same post from the drop down list. And pressing POST.</li>
      <li>HTTP 400 Bad Request, {
    "detail": "possible duplicate"
}</li>
   </ul>
   <li>Removing Like</li>
   <ul>
      <li>Expected - Unlike the post.</li>
      <li>Testing - Navigating to /like/id and pressing delete. </li>
      <li>Redirect back to like/id page, with code - HTTP 204 No Content</li>
   </ul>
</ol>
Followers
<ol>
<br>
<br>
   <li>Follow a User</li>
   <ul>
      <li>Expected - Ability to follow a user of your choosing.</li>
      <li>Testing - Navigating to followers/ choosing a user from the drop down list. And pressing POST.</li>
      <li>Redirect. HTTP 201 Created. ID number of the follow created. </li>
   </ul>
   <li>Removing Follow</li>
   <ul>
      <li>Expected - Unfollowing User</li>
      <li>Testing - Navigating to /followers/id and pressing delete. </li>
      <li>Redirect back to followers/id page, with code - HTTP 204 No Content</li>
   </ul>
</ol>

13. (1.12)	No	Manual testing steps are missing or lacking in any meaningful detail for the Front-End application. (Lastly, while automated testing details are included, manual testing information is missing.)

<br>
<br>
<h2>codingnexus Front End Manual Tests : </h2>

<br>

Navigation bar before signing in.
<ol>
   <li>Sign In</li>
   <ul>
      <li> Expected - Sign in Button takes to login screen.</li>
      <li> Successful - Redirected to : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/signin</li>
   </ul>
   <li>Sign Up</li>
   <ul>
      <li>Expected - Sign Up Button takes to Registration page.</li>
      <li>Successful - Redirected to : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/signup</li>
      <li></li>
   </ul>
</ol>

Authentication.
<br>
<ol>
   <li>New Account Creation</li>
   <ul>
      <li> Expected - Entering the username and same password twice the account is created : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/signup</li>
      <li> Successful - Account created and Redirected to : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/signin</li>
   </ul>
   <li>Easy Password</li>
   <ul>
      <li>Expected - By Entering password that is too easy the account is not created.</li>
      <li>Successful - 1. (This password is too short. It must contain at least 8 characters.) 2. (This password is too common.)</li>
   </ul>
   <li>Mismatch Passwords</li>
   <ul>
      <li>Expected - An error message is shown if passwords don't match.</li>
      <li>Successful - "Alert: The two password fields didn't match."</li>
   </ul>
      <li>Successful Login</li>
   <ul>
      <li>Expected - After successful login the user is redirected to the index page and new options in navigation bar is revealed.</li>
      <li>Successful - Redirected to landing page. Feed, Liked, Top and Profile link available in navigation bar.</li>
   </ul>
</ol>

Navigation Bar.
<br>
<ol>
   <li>Add Post</li>
   <ul>
      <li> Expected - Redirected to pre configured page for post creation with Title, Content And Category selection. </li>
      <li> Successful - Redirected : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/posts/create</li>
   </ul>
   <li>Home or coding nexus Logo</li>
   <ul>
      <li>Expected - Pressing either one redirect to landing page.</li>
      <li>Successful - Redirected : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/</li>
   </ul>
   <li>Feed</li>
   <ul>
      <li>Expected - Redirected to pre configured page that will generate post from the users you follow.</li>
      <li>Successful - Redirect: https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/feed</li>
   </ul>
      <li>Liked</li>
   <ul>
      <li>Expected - Redirect to page that shows only posts that you have liked before.</li>
      <li>Successful - Redirected https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/liked</li>
   </ul>
   <li>Liked</li>
   <ul>
      <li>Expected - Redirect to page that shows highlights of the platform. Such as Most Commented Posts, Most Liked posts etc.</li>
      <li>Successful - Redirected : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/leaderboard</li>
   </ul>
   <li>Profile</li>
   <ul>
      <li>Expected - Redirect to page that shows users profile.</li>
      <li>Successful - Redirected : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/profiles/19</li>
   </ul>
</ol>

Posts
<br>
<ol>
   <li>Adding a New Post</li>
   <ul>
      <li> Expected - Creation of the new post that will be listed on the platform. </li>
      <li>Testing - Opening : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/posts/create . Filling out the Fields of Title, Content and Choosing one of the categories for the post.</li>
      <li> Successful - Redirected To Post Detail View with post listed: https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/posts/100</li>
   </ul>
   <li>Creating a Post and Leaving fields empty.</li>
   <ul>
      <li>Expected - Failure to create a post if either Title or Content field is left empty.</li>
      <li>Testing - Leaving both fields empty. Leaving just title field empty, leaving content field empty</li>
      <li>Results : Can't leave the title field empty : "This field may not be blank." Leaving content field empty creates a post with just a title and a default image if image is not added as well. I think this is permitted as a forum with jus title and a picture you can give enough information to engage with other platform users in comment section.</li>
   </ul>
   <li>Editing The Post</li>
   <ul>
      <li>Expected - Ability for a post author to edit the post.</li>
      <li>Testing - Opening the created post and selecting edit from the drop down menu.</li>
      <li>Results : Redirected to the edit page : https://3000-mikemaroni9-codingnexus-v5kzi5jdw5p.ws-eu107.gitpod.io/posts/101/edit . Ability to change Title, Content and Image. </li>
   </ul>
   <li>Deleting The Post</li>
   <ul>
      <li>Expected - Ability for a post author to Delete the post.</li>
      <li>Testing - Opening the created post and selecting Delete from the drop down menu.</li>
      <li>Results : Redirected to index page and the post is deleted. </li>
   </ul>
      <ul>
      <li>Expected - Failure to create a post if either Title or Content field is left empty.</li>
      <li>Testing - Leaving both fields empty. Leaving just title field empty, leaving content field empty</li>
      <li>Results : Can't leave the title field empty : "This field may not be blank." Leaving content field empty creates a post with just a title and a default image if image is not added as well. I think this is permitted as a forum with jus title and a picture you can give enough information to engage with other platform users in comment section.</li>
   </ul>
Likes
<br>
<ol>
   <li>Liking/Unliking a Post</li>
   <ul>
      <li> Expected - Interesting topics can be awarded by users in form of a like under the post.</li>
      <li>Testing - Opening one of the preexisting posts of the platform and pressing the heart button underneath the post.</li>
      <li> Successful - The whole heart symbol is changed to a filled out one and the number count is increased. Consecutive pressing of the button reduces the number count and leaves just the outline of the symbol.</li>
   </ul>
   <li>Liking Your Own Post</li>
   <ul>
      <li> Expected - Inability to like your own post.</li>
      <li>Testing - Opening logged in users own post and pressing the like underneath the post.</li>
      <li> Successful - Alert: "You can't Like your own post."</li>
   </ul>
</ol>
<br>

Comments
<br>
<ol>
   <li>Leaving a Comment</li>
   <ul>
      <li> Expected - Ability to leave a comment underneath any post.</li>
      <li>Testing - Opening a post and filling out the comment textarea.</li>
      <li> Successful - Comment is displayed with a timestamp attached.</li>
   </ul>
   <li>Editing a Comment</li>
   <ul>
      <li> Expected - Ability to edit your own comments.</li>
      <li>Testing - Selecting EDIT from the dropdown menu in comment section.</li>
      <li> Successful - a new textarea appears with prefilled content from the previous comment that you can edit and save.</li>
   </ul>
   <li>Deleting a Comment</li>
   <ul>
      <li> Expected - Ability to Delete your own comments.</li>
      <li>Testing - Selecting DELETE from the dropdown menu in comment section.</li>
      <li> Successful - The selected comment disappears.</li>
   </ul>
</ol>   

Search Bar
<br>
<ol>
   
   <ul>
      <li> Expected - Ability to Platform for Users/Content/Categories </li>
      <li>Testing - Typing in content, categories and Usernames in search bar.</li>
      <li> Successful - Search bar is capable of searching the users with that username, or categories of the posts or posts with specific names mentioned.</li>
</ol>   

Feed
<br>
<ol>
   <ul>
      <li> Expected - Feed displays only posts from those users that you follow on the platform.</li>
      <li>Testing - Following few members on the platform and checking the feed page.</li>
      <li> Successful - The posts from the followed members are displayed in the Feed with the newest one being displayed on top.</li>
</ol>

Liked
<br>
<ol>
   <ul>
      <li> Expected - Liked displays only those posts that you have previously liked on the platform.</li>
      <li>Testing - Liking a post and seeing will it show up in the Liked section.</li>
      <li> Successful - The liked posts are displayed.</li>
</ol>
Top
<br>
<ol>
   <ul>
      <li> Expected - Shows auto generated list of the leaderboard of the platform. </li>
      <li>Testing - Opening the Top link.</li>
      <li> Successful - Upon opening the page the Most Commented Posts, Most Liked Posts, Most Followed users are displayed. With hyperlink taking it straight to the mentioned post of user profile.</li>
</ol>
Profile
<br>
<ol>
   <ul>
      <li> Expected - See more information about your current profile with ability to edit it.</li>
      <li>Testing - Opening the Profile link. Editing the Profile from the dropdown list.</li>
      <li> Successful - upon opening the page it takes user to /profile/id/ page with information about the users Posts, Followers, Following and Posts. With Ability to Edit the profile changing the profile picture, the Biography, even username and password.</li>
</ol>
<br>
<hr>
<br>
14.Custom Model
<br>
<br>
Have added Post Filter to the Post Model. With the ability to categorize the posts with one of the 5 preset dropdown choices whenever creating a new post. Later this information is used in Post view and Detailed view to quickly differentiate the posts. Can't think of anything else that I would like to add to this project. 
<br>
<br>
<a href="https://ibb.co/XtsTBp6"><img src="https://i.ibb.co/fHp7RtZ/1.png" alt="1" border="0"></a>
 
<br>
<br>
<br>
Hopefuly This will be sufficient to pass the couurse ! :) 
Have a happy holidays ! 
<br>
<br>
<hr>
<hr>
<hr>


<br>
<br>
<br>



<a href="https://ibb.co/x690cXL"><img src="https://i.ibb.co/m4ZwYbT/coding-canva.jpg" alt="coding-canva" border="0"></a>
<h1> Project 5 : Coding Nexus - "One Line At a Time" </h1><p> Blog type application where a registered user can create a new posts, or comment on already existing ones.</p><p> Developed using : HTML, CSS, JAVASCRIPT, REACT, PYTHON, BOOTSTRAP and DJANGO Rest API</p>
<br>
<p>Link to the project on Heroku: <a href="https://coding-nexus-df46516a7083.herokuapp.com/">Coding Nexus on Heroku</a></p>
<br>
<p>Link to the API on Heroku: <a href="https://finals-api-4952a1f1f072.herokuapp.com/">Coding Nexus on Heroku</a></p>
<br>
<p>Link to the Project GITHUB repository: <a href="https://github.com/MikeMaroni9/codingnexus">GITHUB</a></p>
<br>
<p>Link to the API GITHUB repository: <a href="https://github.com/MikeMaroni9/api-finals">GITHUB</a></p>
<br>
<p>Link to the GITHUB USER Stories: <a href="https://github.com/users/MikeMaroni9/projects/5">User Stories</a></p>
<br>
<p>Link to the GITHUB Milestones: <a href="https://github.com/MikeMaroni9/codingnexus/milestones">Milestones</a></p>
<br>
<h2> The Process of the Web Page</h2><p>Blog style page with authentication, ability to create posts, delete posts. Leave comments, edit comments and like the posts.</p>
<p>Upon opening a page, you are greeted with pre-filled blog style page. All content is taken from original sources, comments generated randomly without particular agenda</p><a href="https://ibb.co/ZmqF0Dg"><img src="https://i.ibb.co/16FPkWX/1-login-buttons-no-autharization.png" alt="1-login-buttons-no-autharization" border="0"></a>

<p>For visitors that are not signed-up and logged in, you are greeted with Coding Nexus logo which acts as a link button to index page, and Three buttons on the opposite side. Home, Sign Up and Login</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/F3hw416/2-login-buttons.png" alt="2-login-buttons" border="0"></a>
<p>Sign Up, takes you to the form that asks for username and password input. Double password input required to avoid mistakes and checks for matching password input. Upon singing up you are automatically redirected to the Sign In page to log into your newly created account.</p><a href="https://ibb.co/RBZw6w4"><img src="https://i.ibb.co/xfPTgT8/3-sign-up.png" alt="3-sign-up" border="0"></a>
<p>Sign In, takes you to login page for pre registered users</p><a href="https://ibb.co/k2wb9R8"><img src="https://i.ibb.co/s9Nx60w/4-sign-in.png" alt="4-sign-in" border="0"></a>
<p>Upon signing in, you will be returned to the index page. With restructured Navigation Bar. With Following Options : Add a Post, Home, Liked, Top, Profile and Sign out !</p><a href="https://ibb.co/HPjYNLz"><img src="https://i.ibb.co/M1mp8yV/5-signed-in-navbar.png" alt="5-signed-in-navbar" border="0"></a>
<p>Search Bar : Displayed across Top of the page. Searches through Users, Keywords, Categories </p><a href="https://ibb.co/8gWR4T6"><img src="https://i.ibb.co/xqpc8PJ/18-search-bar.png" alt="18-search-bar" border="0"></a>
<p>Add Post : Takes you to the new page for creating a new posts. With ability to input a Title, Content, Choose Category and Upload a picture. Creating a post without adding a picture will trigger an automatically applied general coding image to your post. </p><a href="https://ibb.co/V2dX5tM"><img src="https://i.ibb.co/dGSnxrk/6-Add-a-post-page.png" alt="6-Add-a-post-page" border="0"></a>
<p>Feed : Gives you ability to see posts only from the persons you are following.</p><a href="https://ibb.co/NTXVwsz"><img src="https://i.ibb.co/Sf2sqPp/10-Feed.png" alt="10-Feed" border="0"></a>
<p>Liked : Only shows the posts you have liked before making it easy to find posts you have previously liked.</p><a href="https://ibb.co/dPX0hgB"><img src="https://i.ibb.co/k4zgd1K/11-Liked.png" alt="11-Liked" border="0"></a>
<p>Top : Shows the sites Leaderboard, Automatically generates multiple lists from the database that show whos post gains the most likes, most comments, or who is popular among the stalkers... List is also navigation links that take you to the respective user profile or post .</p><a href="https://ibb.co/dQrX0PL"><img src="https://i.ibb.co/NLsf69m/Top.png" alt="Top" border="0"></a>

<p>Profile Page will show your information and also have the ability to edit it. Ability to see  how many posts you have made, how many followers you have and how many people you are following yourself. Included on the right side is the list of the popular users of the platform with numbers of followers that they have. With follow/unfollow button available to start following these users. </p><a href="https://ibb.co/9qscmr3"><img src="https://i.ibb.co/64grcWJ/7-profile-page.png" alt="7-profile-page" border="0"></a>
<p>Edit Profile:  You have ability Edit your profile (Update profile picture and bio) and to change, username and password.</p><a href="https://ibb.co/Rj2dRhB"><img src="https://i.ibb.co/LNSHVQJ/8-edit-profile.png" alt="8-edit-profile" border="0"></a>
<p>Sign Out : Gives you ability to log out of your account.</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/F3hw416/2-login-buttons.png" alt="2-login-buttons" border="0"></a>

<p>Author of the post has the ability to edit or to delete the post. User has to be logged in and has to be the author of the post.</p><a href="https://ibb.co/5jQhJH8"><img src="https://i.ibb.co/2Mz3p4t/12-editing-posts.png" alt="12-editing-posts" border="0"></a>
<p>As a signed in user, you can like the post, increasing the like count and add comments</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/4Nwk9qs/13-liking-and-commenting.png" alt="13-liking-and-commenting" border="0"></a>
<p>Adding a comment puts newest comments on the top with the time stamp to see how long ago the comment was created.</p><a href="https://ibb.co/NsytCmF"><img src="https://i.ibb.co/nbL6mnw/14-comments.png" alt="14-comments" border="0"></a>
<p>Comment author has the ability to edit or delete the comment.</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/jDJMT5f/15-commend-edit.png" alt="15-commend-edit" border="0"></a>
<p>There are no number of maximum posts or maximum comments per page, as infinite scroll has been added to the project automatically loading next post and next comment.</p><a href="https://ibb.co/ZmqF0Dg"><img src="https://i.ibb.co/16FPkWX/1-login-buttons-no-autharization.png" alt="1-login-buttons-no-autharization" border="0"></a>
<p>Newests POSTS are automatically showed at the top of the page.</p><a href="https://ibb.co/ZmqF0Dg"><img src="https://i.ibb.co/16FPkWX/1-login-buttons-no-autharization.png" alt="1-login-buttons-no-autharization" border="0"></a>
<p>Mobile View : Functionality wise mobile view doesn't differ from regular view. Only the navigation bar is hidden with Hamburger Menu.</p><a href="https://ibb.co/89B1VHr"><img src="https://i.ibb.co/GRJzjqW/1.png" alt="1" border="0"></a><a href="https://ibb.co/PY9rRs9"><img src="https://i.ibb.co/X43W9f3/2.png" alt="2" border="0"></a>------------------

<h2>Design created with Canva.Com Color Studio Template</h2>
<hr>
<br>
<br>
<p>Colors user : Black Backgrounds, White Font, red for the hover effect and #ca0e27 for active links.</p>
<a href="https://ibb.co/4pDqsvM"><img src="https://i.ibb.co/WfdhD8F/coding-canva.png" alt="coding-canva" border="0"></a>
<a href="https://ibb.co/6rKM9Lx"><img src="https://i.ibb.co/bQ40wDZ/2.png" alt="2" border="0"></a>
<a href="https://ibb.co/pWw6nGg"><img src="https://i.ibb.co/vsqCDgb/style-3.png" alt="style-3" border="0"></a>
<a href="https://ibb.co/mJ4jJC7"><img src="https://i.ibb.co/31c31yH/style-4.png" alt="style-4" border="0"></a>
<br>
<br>
Fonts : "DM Sans" & "sans serif" 
<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/ss0kSj0/font-usage.png" alt="font-usage" border="0"></a>
<br>
I chose the "DM Sans" font as the main font for its modern and clean aesthetic, which aligns well with the overall design principles of the project. "DM Sans" offers a pleasing readability and a contemporary feel, making it suitable for various screen sizes and resolutions.
To ensure a robust and consistent user experience across different devices and browsers, I've designated a sans-serif font as a fallback option. This means that if, for any reason, "DM Sans" is unavailable or not supported, the browser will default to a generic sans-serif font. 
<br>


<h2>Tests</h2><hr>
<p>Lighthouse Test:</p><a href="https://ibb.co/NKN9Nps"><img src="https://i.ibb.co/HqPtPYV/lighthouse-1.png" alt="lighthouse-1" border="0"></a><a href="https://ibb.co/2hM9dhm"><img src="https://i.ibb.co/g9W2J9H/lighthouse2.png" alt="lighthouse2" border="0"></a>
<p>WRC CSS Validator:</p><a href="https://ibb.co/9h07Sgh"><img src="https://i.ibb.co/RNKqdbN/w3c-css.png" alt="w3c-css" border="0"></a>

<h2>Used Materials / References</h2><hr><p>React Essentials CI course</p><p>"CI" Moments project</p><p>My own previous project mockddit as a inspiration and continuation of the project with React elements.</p><a href="https://github.com/MikeMaroni9/P4-Reddit-Django">mockddit </a>
<p> <a href="https://www.youtube.com/watch?v=kpeWteZyHpg">UpVote DownVote function idea from 
Desphixs on Youtube</p>
<hr>

<h2>Deployment<h2>
<p>1.Installing gunicorn server to run Django on heroku</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/fdTZKc2/1.png" alt="1" border="0"></a>
<p>2.Install psycopg2 adapted for PostgreSQL database</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/zff7RNQ/2.png" alt="2" border="0"></a>
<p>3.Creating a Requirements.txt file for necessary dependencies</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/gdX8SFS/3.png" alt="3" border="0"></a>
<p>4.Creating a new project in Django</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/Sxb3t8L/4.png" alt="4" border="0"></a>
<p>5.Creating the API app</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/ckYNB7z/5.png" alt="5" border="0"></a>
<p>6.Linking GitHub repository to Heroku</p><a href="https://ibb.co/kgtd14n"><img src="https://i.ibb.co/vxStY35/6.png" alt="6" border="0"></a>
<p>7.Creating a PostgreSQL database</p><a href="https://ibb.co/gSJy5Gz"><img src="https://i.ibb.co/X7tXh9S/7.png" alt="7" border="0"></a>
<p>8.Adjusting env.py and settings.py files</p><p>Setting Config Vars in Heroku</p><a href="https://ibb.co/VCKGrLb"><img src="https://i.ibb.co/dphv1fX/8.png" alt="8" border="0"></a>
<p>9.Creating a Procfile</p><a href="https://imgbb.com/"><img src="https://i.ibb.co/zsyHR7b/9.png" alt="9" border="0"></a>
<p>10.Set Debug Mode to False</p><a href="https://ibb.co/gt1JVCR"><img src="https://i.ibb.co/j3KDRFr/10.png" alt="10" border="0"></a>
<p>11.Add - X_FRAME_OPTIONS ='SAMEORIGIN' to settings file.</p><a href="https://ibb.co/gt1JVCR"><img src="https://i.ibb.co/j3KDRFr/10.png" alt="10" border="0"></a>
<p>12.Deploying a project on Heroku</p><a href="https://ibb.co/mcgdtp9"><img src="https://i.ibb.co/FDCcJp5/11.png" alt="11" border="0"></a>




<h2>Reusable React components </h2>
<p>Leaderboard has been created to view interesting information about site, such as Most Commented Posts, Most followed users etc.</p>
<a href="https://ibb.co/1M5FfqW"><img src="https://i.ibb.co/3vqgyNZ/1.png" alt="1" border="0"></a>
<p>Most Liked Posts has been refactored and can be reused across the website</p>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/NyWwM75/2.png" alt="2" border="0"></a>
<p>Most Followed users has been refactored and can be reused</p>
<a href="https://ibb.co/XX5BSpV"><img src="https://i.ibb.co/rkpP4Mv/3.png" alt="3" border="0"></a>










<h2>Tools Used building API </h2>

<li>I commence by installing Django.
<li>Using 'django-admin startproject,' I initialize the project.</li>
<li>I add 'django-cloudinary-storage' for cloud storage.</li>
<li>'Pillow' is integrated for image processing.</li>
<li>Cloudinary is configured for image storage and settings.</li>
<li>I enable automatic user profile creation with signals.</li>
<li>I introduce 'djangorest' for API enhancement.</li>
<li>Serialization is employed to convert Python data to JSON.</li>
<li>'django-filter' enables precise data filtering.</li>
<li>'axios' is installed for API requests in React.</li>
<li>'react-infinite-scroll-component' ensures dynamic post loading.</li>

<h2>Database Construct</h2><a href="https://imgbb.com/"><img src="https://i.ibb.co/3kr3s2Z/19.png" alt="19" border="0"></a><hr>



<h2> The Persistent Problems </h2>
<p>When an author Deletes a post, the confirmation is not asked.</p>
The notifications for CRUD operations need to be displayed on the UI.

<br>


<h2>Testing Coding Nexus React project</h2>

<p>Beginning by installing Mock Service Worker in dev mode</p>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/9W3ymq0/1x.png" alt="1x" border="0"></a>
<p>Creating A User for handling mock requests</p>
<a href="https://ibb.co/G77xzbt"><img src="https://i.ibb.co/sjjm8M6/2-creating-a-mocking-endpoint-handler.png" alt="2-creating-a-mocking-endpoint-handler" border="0"></a>
<p>Setting up Tests</p>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/KLNvwRM/3-setting-up-the-server.png" alt="3-setting-up-the-server" border="0"></a>
<p>Creating __TEST__ folder and tests for NavBar, New Posts and Comments</p>
<a href="https://ibb.co/5K5ZpyT"><img src="https://i.ibb.co/BngkWxL/4.png" alt="4" border="0"></a>
<p>Testing NavBar</p>
<a href="https://ibb.co/DzkCgPB"><img src="https://i.ibb.co/sbQwJpT/5-navbar-test-1.png" alt="5-navbar-test-1" border="0"></a>
<a href="https://ibb.co/vsWnB6F"><img src="https://i.ibb.co/pWTFPB7/6-navbar-test-2.png" alt="6-navbar-test-2" border="0"></a>
<p>Testing New Posts</p>
<a href="https://ibb.co/CP8cVPd"><img src="https://i.ibb.co/LNRF9Nw/7-create-a-new-post-test.png" alt="7-create-a-new-post-test" border="0"></a>
<p>Testing Comment Section</p>
<a href="https://ibb.co/rMd1WKk"><img src="https://i.ibb.co/DkrSqP4/8-create-a-new-comment.png" alt="8-create-a-new-comment" border="0"></a>
<p> Test Results</p>
<a href="https://ibb.co/DtjP7Bx"><img src="https://i.ibb.co/zrtWS3y/9-test-score.png" alt="9-test-score" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />


<br>
<br>
<br>







