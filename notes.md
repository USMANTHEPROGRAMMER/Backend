Starting Backend 5 Nov 20206 12:11 PM

Sabse pehle hum yeh smjhte hain ke Server kia hota hai:
A Server is a computer or system that receives requests from clients, processes those requests, and sends back responses.

Client: Jo request bhejta hai. For example, your browser.
Server: Jo request receive aur process karta hai.
Response: Jo result server client ko wapas bhejta hai.

ab yahan pe hum apne Server ko Program krne ke liye Node.js ka Use krenge.

Now We'll Talk about Packages:
A Package is a collection of reusable code that someone has created so other developers can use it in their projects.

Real Life Example:
Imagine we are Building a House and we Need Stone Bricks and Cements so ab hum har chez khud to nahi banayengy Ready Made lenge this is the Basic Idea of Package.

Examples of Packages in JavaScript
Here are some packages you might already know:
Package	  Purpose
Axios	  Making HTTP requests
Express	  Building backend servers
React	  Building user interfaces
Zod	Data  validation
bcrypt	  Password hashing
Supabase  JS Connecting with Supabase

Packages humare paas In JavaScript, developers commonly get packages from npm (Node Package Manager).

We Can Install Packages using Terminal

and humen koi agar Package dekhna ho to hum npmjs.com pe jaake dekh skte hain.

and Packages humare Node_Modules folder me save hoga

Now Package.json:
package.json is a configuration file that contains information about our project, its scripts, and its dependencies (packages).

npm init -y

this cmnd Creates a new package.json file in your project directory.

like this:
{
  "name": "my-backend",
  "version": "1.0.0",
  "description": "My first backend project",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
Let's understand each property.

Property	  Meaning
name	      Project name
version	      Project version
description	  What the project does
main	      Main entry-point file (metadata)
scripts	      Commands we can run
dependencies. Packages needed by the application
devDependencies Packages mainly needed during development

Dependencies are the packages that your application needs to run. They are listed in the "dependencies"
For Example:
npm install express
After installing Express, npm adds it to the dependencies section of package.json.
{
  "dependencies": {
    "express": "^5.1.0"
  }
}
Because our project depends on Express to run its backend server.

DevDependencies: These are packages that are mainly required during development, rather than running the application in production.
For Example:
npm install nodemon
After installing Nodemon, npm adds it to the devDependencies section of package.json.

Now Package-lock.json:
package-lock.json records the exact versions of installed packages and their dependency tree.

Important npm commands
Command	Purpose
npm init -y	Create package.json
npm install express	Install a package
npm install -D nodemon	Install development dependency
npm install	Install dependencies from package.json and lockfile
npm uninstall express	Remove a package
npm run dev	Run the dev script
npm start	Run the start script

Now ab hum Actual Server banana Seekhenge: (Using node.js)
sabse pehle hum npm init -y krenge.

Sabse pehle to hum yeh Smjhlete hain ke kis cheez ka kia Role hai:

1. Node.js
Node.js is a JavaScript Runtime Environment that allows us to run JavaScript outside the browser.
2. Express.js
Express.js is a Web Framework built on Node.js that makes creating servers and APIs easier.
3. MongoDB
MongoDB is a NoSQL Database used to store application data in JSON-like documents.

ab hum Server Create kregne using Express JS. Express ke thorugh hum acha Server Create krskte hain and bht Jaldi krskte hain No Doubt.

now hum Express ko i krenge in our Project.
then hum server.js krke file banayengy for Start making our Server.

Then hum Server banayengy using this:
const express = require('express');

express();
Server Create krna ek alag baat hoti hain and Start krna ek alag baat hoti hai.
express.listen(3000, () => {
    console.log('Server is running on port 3000');
});
This is Now Running our Server on port 3000. Now we can access our Server using the URL http://localhost:3000.

app.listen() is a method that starts our Express server and makes it listen for incoming requests on a specific port.

Now We'll Start Project using cmnd as node filename.js

and ek GET Request Create krenge on "/" and usko Test bhi krenge:
app.get("/", (req, res) => {
    res.send('Hello! My first Express Server');
});

hum ek dafa dekhlete hain ke humne kia kia krlia hai:
npm init -y => Node JS Application Initiate krdeti hai yeh cheez nuhh!
npm i express => Express Package Install krdeti hai.
const app = express(); => Server instance Create krrhe hain!
app.listen(300) => Server ko Start krne ke liye!

Now hum smjhte hain What is API?
API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other and Exchange Data With Each other. In other words, Frontend or Backend ko Communicate krane ka Souce.

API ki Different Types bhi hoti hain:
1. REST API
2. GraphQL API
3. WebSocket API
4. gRPC API

Now We'll Move into Rest API and Focus into it For Now:
REST API ek way hai jiske through frontend aur backend HTTP requests ke zariye communicate karte hain.
REST ka full form hai Representational State Transfer.

Rest API ke 5 Important HTTP Methods:
Method	    Purpose	                            Example
GET	        Data lena	                          Get all jobs
POST	      Naya data banana	                  Create a job
PUT	        Existing data replace/update karna	Replace job details
PATCH	      Data ka kuch part update karna	    Update job title
DELETE	    Data delete karna	                  Delete a job

Easy example — Job Bank
GET
All jobs fetch karo.

POST
New job create karo.

PUT
Job ki complete details replace karo.

PATCH
Sirf job title update karo.

DELETE
Job delete karo.

abhi hum ek Chota sa Notes ka Task bnayenge. 

Jab hum log Production Level Project ki baat krte hain to hum usmen nuhh src/app.js main Server Create krte hain and then Root Folder main ek file banate hain as server.js and yahan pe Server ko Run krte hain 

hum logon ko kabhi agar API Test krni ho to humen PostMan use krna hota hai and yehi Industry Standard hai.
Post Man main lekin hum Raw and then JSON Format Choose krenge. and hum kuch response bhi denge from our Server Program ke kuch wo Return to kre 
in PostMan.
 
ek bht achi Cmmand hai ke agar hum changes krte thy to humen baat baat node server.js karna prrha tha lekin iska Solution hai npx nodemon server.js it behaves like Go Live in VS Code.

Now ab jo hum kaam krrhe hain usmen jo Data hai wo ek Variable main Store horha hai or jab Server Refresh horha hai to Variable Empty hoye jarha hai is cheez ko Solve krne ke liye hum DataBase seekhenge!

Sabse pehle hum MongoDB main Login krenge then usko Start krenge and then ek Cluster Create krenge:
MongoDB mein Cluster ek group of database servers hota hai jo tumhare data ko store aur manage karta hai.
Simple words mein:
Cluster = Tumhara database infrastructure jahan tumhari databases run karti hain.









