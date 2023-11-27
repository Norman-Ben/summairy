# SummAIry

**Project Summary:** This project was a venture aimed at enhancing my understanding and practical application of Redux for state management in React, and honing my skills in NodeJS backend authentication practices and technologies (JWT + Bcrypt). Initially, the project began from an online AI API app tutorial used for learning Redux, however I then built ontop of this to include a backend and database to manage logins, authentication, and CRUD functionality.

**Project Requirements:** The project’s objective was to build a user-friendly interface enabling users to enter an article URL for submission to a GPT-4 powered AI API. The API would then summarize the article into three paragraphs, return it, and save it in the user’s local browser storage. For long-term storage, users could opt to register an account and save the summaries under ‘My summaries’, linking them to their account in a database.

**Justification for Tech Stack:** While the tech stack chosen for this project might seem a bit overkill for an application of this size, it was primarily driven by my desire to learn and experiment with state management using Redux.

The frontend is built with React, React Router, and Redux. My decision to use Redux was to gain practical experience with it, even though a simpler solution, like React’s built-in state management APIs (useEffect and useContext), could have been uses since this project doesn't have much state to handle.

For the backend, I opted for a NodeJS Express server to practice managing authentication using JWT. Although this could have been simplified by using a Backend as a Service (BaaS) like Firebase, I wanted the hands-on experience of building authentication from scratch.

When it came to choosing a database and ORM, I went for PostgreSQL and Sequelize. I wanted to use a relational SQL DB to manage the relationship between users’ accounts and their summaries.

The Backend is hosted on Railway, as it allows for easy cost management, and will freeze the server if budget is exceeded. And I hosted the React frontend on Netlify, which offers an easy-to-use platform for frontend deployment.

**Project Outcome:** This project has greatly expanded my understanding of state management using Redux and its advantages/disadvantages compared to native React state management. Additionally, it has deepened my knowledge of JWT authentication handling.
