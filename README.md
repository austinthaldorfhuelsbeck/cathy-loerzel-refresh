# Cathy Loerzel

This project is a single-page application designed as a personal website, a blog, and a landing page to promote Cathy Loerzel and her book, Redeeming Heartache.

Its origin is as a simple frontend with basic API functionality (two contact forms).

It has since been expanded to offer a more robust API solution. The app now stores all requisite data for blogs, topics, categories, testimonials, and events within a database, and provides methods for interacting with and modifying this data.

An admin dashboard is currently under development, which will allow admin users to perform API-enabled actions upon the data from within a user-friendly dashboard.

### The current deployment is available [here](https://cathyloerzel.com/).

## Custom API Solution

*(updated 09-02-2021)*

A custom API solution for keeping track of various data throughout the site. The API keeps track of blog posts, their topics, and their categories. It also manages testimonials for "Redeeming Heartache", and upcoming events.

The API powers the display of the site, as well as the functionality of the admin page.

### Blogs

Blogs encompass writing, podcasts, and videos of Cathy's teaching. Each blog is organized by category and topic.

Blogs click through to an individual blog page, which displays the data for a single post in greater detail for the user to experience. The blog page is designed to display any of these three types of blog, and adjust what is displayed accordingly.

The blog post object is structured as follows:

- blog_id (string): PRIMARY This is parameter read by the component from the URL. Unique identifier, required, will be auto generated in dashboard form if not provided.
- title (string): (required) The unique title of the blog to be displayed.
- featured (boolean): Whether or not the blog is featured.
- category (string): (required) Currently, categories are: writing, podcasts, teaching.
- topic (string): (required) A topic, to categorize the blog, used in sorting cards.
- date (date): (required) Date the content was published, MM-DD-YYYY.
- text (string): (required) The description provided for the card to display, for example the first paragraph of the blog.
- img (string): (required) The public URL for the banner image for the blog, should be 16x9.
- content (string): (required) The HTML of the full content of the post.
- audio (string): The public URL for the audio of a podcast post.
- video (string): The public URL for the video of a teaching post.
- url (string): The clickthrough link for posts which are originally hosted elsewhere.

#### Blogs - Methods and Routing

The methods and routing for the blogs section of the API is as follows:

- GET / - list all blogs
- POST / - create a new blog
- GET /category=:blog_category - list all blogs in a category
- GET /topic=:blog_topic - list all blogs of a topic
- GET /:blog_id - read a blog by ID
- GET /featured - list all blogs which are featured
- PUT /:blog_id - update a blog by ID
- DELETE /:blog_id - delete a blog by ID

### Topics

Topics categorize blogs by subject matter. They relate to the Blogs table.

The topic object is structured as follows:

- topic_id (integer): PRIMARY Unique numerical identifier
- topic (string): (required) Name of the topic which relates to Blogs table
- color (string): (required) Hex value of the color to associate with this topic.

#### Topics - Methods and Routing

The methods and routing for the topics section of the API is as follows:

- GET / - list all topics
- GET /:topic_id - read a topic by ID
- PUT /:topic_id - update a topic
- POST / - create a new topic
- DELETE /:topic_id - delete a topic

### Categories

Categories represent the type of blog post. They relate to the Blogs table.

The category object is structured as follows:

- category_id (integer): PRIMARY Unique numerical identifier
- category (string): (required) Name of the category which relates to Blogs table

#### Categories - Methods and Routing

The methods and routing for the categories section of the API is as follows:

- GET / - list all categories
- GET /:category_id - read a category by ID
- PUT /:category_id - update a category
- POST / - create a new category
- DELETE /:category_id - delete a category

### Testimonials

Testimonials are used for the Redeeming Heartache landing page. A carousel cycles through cards which are populated from the database.

The testimonial object is structured as follows:

- testimonial_id (integer): (required) A unique numerical identifier.
- name (string): (required) First and last name of the author of the testimonial.
- title (string): (required) Professional title of the author of the testimonial.
- message (string, 1000): (required) The testimonial itself.

#### Testimonials - Methods and Routing

The methods and routing for the testimonials section of the API is as follows:

- GET / - list all testimonials
- GET /:testimonial_id - read a testimonial by ID
- PUT /:testimonial_id - update a testimonial
- POST / - create a new testimonial
- DELETE /:testimonial_id - delete a testimonial

### Events

Events are used for the Upcoming Events component. An accordion displays details for events which are populated from the database.

The event object is structured as follows:

- event_id (integer): (required) A unique numerical identifier.
- name (string): (required) Name of the upcoming event.
- date (string): (required) Date(s) of the upcoming event.
- content (string, 10000): (required) The HTML of the full content of the post.

#### Events - Methods and Routing

The methods and routing for the events section of the API is as follows:

- GET / - list all events
- GET /:event_id - read an event by ID
- PUT /:event_id - update an event
- POST / - create a new event
- DELETE /:event_id - delete an event
