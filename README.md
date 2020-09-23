This is the client-side of the web application "Movie Club", a site for users
to create and organize movie collections according to their own personal tastes.
Users can create, update and destory both collections and movies stored within
those collections.

The client was built with JavaScript, CSS/SASS, HTML5, and Bootstrap. It
interacts with a backend I built with JavaScript, Node, Express, MongoDB, and
Mongoose-- the GitHub repo and deployed heroku site can be found here: https://github.com/AidanKenney/MovieClub-Express-api, https://fierce-forest-42234.herokuapp.com/

In building this project, I planned to finish the CRUD functionality with
collections before I started working on the movies, because the API holds movies
as subdocuments on a collection object. This went according to plan,
but became complicated as I had to begin populating the HTML with new elements
after a succesful API request. After consulting with my instructor Mike Finneran
and reading the corresponding documentation, I tried using nested forEach methods
instead of nested for loops to iterate through both collections and movies on
the API response object, I was able to generate usable HTML upon a user's actions,
and store the needed ID info in the HTMLso users will not have to manually enter
in an ID code.

After tweaking the page's layout with Bootstrap, I was able to dedicate some
time to my styling. I went for an 8-bit aesthetic with a color schemes
influenced by old VHS tapes. I think this is a good start for a site that embraces
the old school way of finding new movies, person to person.

In future versions, users will ideally be able to interact in a forum setting,
where collections can be shared and commented upon, with popular collections
pinned to the front page.

There are currently no glaring bugs and the site is fully functional, but I
think UX could be improved, particulary
when users are prompted to enter new info for a CRUD action. As it stands now,
the form appears at the top of the collection instead of where the button
prompting the event is, and is a bit jarring.


Wireframes: https://imgur.com/a/cJKLaYM

User stories:
As a user who is a creative person, I want to be able to make custom names for
my collections so they are as witty as I am.

As a user who is social, I want to be able to comment on other
people's collections so I can leave suggestions and praise.

As a user who wants to learn about movies, I want there to be links to each movie's
wikipedia so I can read up on it.

As a user who is a movie-novice, I want to be able to browse collections by a metric
like entry-level, middle of the road, and advanced/out-there.
