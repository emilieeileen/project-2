# Friday Night Films: a React Application 

## Overview
In this 48 hour project, my partner and I created a React app using an existing API from The Movie DB. 

## Tasks
* **Consume a public API** – this could be anything but it must make sense for your project.
* **Have several components** - At least one classical and one functional.
* **The app should include a router** - with several "pages".
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Be deployed online** and accessible to the public.

# Technologies Used
- HTML
- SCSS
- React.js
- Git
- Github
- Insomnia
- Axios

### API courtesy of https://www.themoviedb.org/

## Plan
From the beginning, we knew we wanted to work with a film API as there were many accessible and well documented APIs out there for us to be creative with. Looking at other movie database websites, we noted many had similar layouts and color themes, which led u to the decision to create something that visually stood out. Using a color pallette designed from an old Hollywood theatre, we decided on an Art-Deco, Golden Age of Hollywood design for our page. The color pallette also proved useful as the dark blue, light teal and gold tones matched well as a background for many of the movie posters on the database. WE also found the PoiretOne font fit in perfectly with our theme, giving our website a vintage, classic feel while showing the latest modern films.

## Functionality
The web app uses React to display the films in a flex wrap grid. Users can click on a film poster to see the information about each individual film. On that page, users may select **Similar Films** which will bring them to a new page that displays all films related to the previous film.

Users can also use the navigation bar to search films by genre or movie title. We wanted to give the users flexibility to search films by multiple means while providing a clean interface to display said films.

### Home Page
We decided to use the *Trending* endpoint to display 20 trending movies on our home page. This allowed us to fill our page with content and allow the user to easily navigate to the current most popular movies.

### Search & Genres

### Single Movie and Similar Films

### Catching Errors: Missing Posters, Loading Page and No Similar Films
Calling data from the API can take some time an the time lag can stop data from fully loading on the page. To combat this we, we added a loading feature on all of our pages. 

While The Movie Database has many items fully fleshed out, some films 

## Bugs
- When on the Genres drop down, if you move to one genre and then return to ALl Genres the fiolms displayed remain as the last genre selected

## Lessons Learned
Both myself and Vesna really enjoyed the paired programming experience. Since this project was only 48 hours, we divided up the work and helped each other when we got stuck on bugs.
