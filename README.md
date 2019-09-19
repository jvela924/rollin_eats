# Rollin' Eats
Rollin' Eats is an app that matches users with a food truck in their area, using either tags of food images that users like or dislike.

## Technologies Used
### React
I React to build-out our Front-end. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

### PostgreSQL
I used PostgreSQL as our database. It is a relational database management system emphasizing extensibility and technical standards compliance.

### Node.js

Node.js is an event driven, lock-free javascript runtime. It handles multiple events concurrently, and fires callbacks upon each connection.

### Express
Express is a web framework for Node.js.


## User Stories
1. I, as a user, can browse all food trucks in my area.
2. I, as a user, can like or dislike food images that will show me information about the foodtruck that image belongs to. 
3. I, as a user, can view information about each food truck and see links to their social media and search by name.
4. I, as a user, can sort through random images of food.

## Wireframes

### Homepage
![Homepage](https://github.com/jvela924/rollin_eats/blob/master/images/Rollin%20Eats%20Homepage.png)

### Profile
![Profile](https://github.com/jvela924/rollin_eats/blob/master/images/Rollin%20Eats%20Profile%20Page.png)

### Food Truck Pages
![Food Truck Pages](https://github.com/jvela924/rollin_eats/blob/master/images/Rollin%20Eats%20Food%20Truck%20Page.png)

## Challenges
### Deploying to Heroku
I struggled initially deploying to Heroku, since I didn't realize I needed to add a post-build script that notififies Heroku to run and build the React front-end after deploying the Node/Express back-end. Ultimately, with the help of some online resources, I was able to deploy.

## Future Enhancements
* Add authorization/authentication workflow and post route to create users
* Add in more food trucks and other cities. Allow users to filter by city or use their location on page load to automatically filter food trucks. 
* Add ability for users to create and save a list of their liked food trucks.
