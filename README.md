**Project Summary:** This project was a self-initiated venture aimed at enhancing my understanding and practical application of Redux for state management in React, and honing my skills in NodeJS backend authentication practices and technologies (JWT + Bcrypt). Initially, the project began as an AI API app tutorial used for Redux practice, but evolved to include a backend and database to manage logins, authentication, and CRUD functionality as the app found real-world use.

**Project Requirements:** The project’s objective was to build a user-friendly interface enabling users to enter an article URL for submission to a GPT-4 powered AI API. The API would then summarize the article into three paragraphs, return it, and save it in the user’s local browser storage. For long-term storage, users could opt to register an account and save the summaries under ‘My summaries’, linking them to their account in a database.

**Justification for Tech Stack:** While the tech stack chosen for this project might seem robust for an application of this size, it was primarily driven by my desire to learn and experiment.

The frontend is built with React, React Router, and Redux. My decision to use Redux was to gain practical experience with it, even though a simpler solution, like React’s built-in state management APIs (useEffect and useContext), could have been employed given the relatively shallow component tree depth.

For the backend, I opted for a NodeJS Express server to practice managing authentication using JWT. Although this could have been simplified by using a Backend as a Service (BaaS) like Firebase, I wanted the hands-on experience of building authentication from scratch.

When it came to choosing a database and ORM, I went for PostgreSQL and Sequelize. I wanted a relational SQL DB to manage the relationship between users’ accounts and their summaries. While this could have been achieved with a document DB like MongoDB, I prefer the structure that an SQL DB provides, especially in a use case like this that involves relational data.

For hosting, I selected Google Cloud Platform to familiarize myself with one of the major cloud providers’ services. I chose GCP over AWS because it offers more features to monitor and control hosting costs. The GCP services used to host this application include App Engine for the NodeJS backend, and Cloud SQL for the PostgreSQL instance. I hosted the React frontend on Netlify, which offers an easy-to-use platform for frontend deployment.

**Project Outcome:** This project has greatly expanded my understanding of state management using Redux and its advantages compared to native React state management. Additionally, it has deepened my knowledge of JWT authentication handling and acquainted me with hosting using a major cloud provider.
