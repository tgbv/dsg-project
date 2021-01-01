## Simple API for adding/managing books in a library store

### Admin area
- GET: `/admin-area/users`  --> retrieves all users
- POST: `/admin-area/user`  --> creates a new user (can create other admins)
- DELETE: `/admin-area/user/:user_id` --> can delete any user

### Auth
- POST: `/auth/login` --> generates auth JWT
- POST: `/auth/register` --> creates a new user (cannot create admin)

### Books related 
- GET: `/books/:page?`  --> retrieves all registered books (paginated)
- GET: `/my/:page?`     --> retrieves all user's posted books (paginated)
- POST: `/`       --> posts a new book
- DELETE: `/:book_id` --> deletes a book the user posted

### Search 
- POST: `/search/:page?`  --> search for books by title/id/phrase/orderby/etc.. (paginated)
