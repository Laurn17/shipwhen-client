# shipwhen? 
largest worldwide shipping times directory to look up estimated vs. actual business shipping times.

http://www.shipwhen.com

## Demo:
UN: demo PW: DemoUser

![alt text](/images/screenshot.png)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
https://nodejs.org/en/
https://www.mongodb.com/
https://reactjs.org/
create a mongoDB Atlas account
create a Heroku account 

## Installing
A step by step series of examples that tell you how to get a development env running

git clone https://github.com/Laurn17/shipwhen-api
git clone https://github.com/Laurn17/shipwhen-client

cd to each folder respectively

npm install both

Heroku is required for deploying the app, here are the steps to install, create, and deploy to heroku:

npm install -g heroku

Add a file called static.json with:
{
   "root": "build/",
   "routes": {
     "/**": "index.html"
   }
 }

Run: heroku create --buildpack https://github.com/mars/create-react-app-buildpack.git

git push heroku master

## Running the tests
npm test

## Deployment
git push heroku master

heroku ps:scale web=1

## Built With
express - The JS framework used
mongoose - The database client
passport -Authentication middleware
mocha - JS testing framework
React.js - client side libary
Redux.js - client side state management

## Authors
Lauren Morrow - Initial work - Laurn17
Sean Robertson - Help, Edits

## License
This project is licensed under the MIT License - see the LICENSE.md file for details