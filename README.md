# Intellichoice Quiz Generator
The IntelliChoice website project aims to be a hub where students can practice math skills with quizzes and activities. IntelliChoice’s mission is to foster students’ learning experience and aids those who are struggling in math at the cost of none. 

## Installation Setup
This project requires Node.js. Download Node.js if you haven't already from https://nodejs.org/en/download/.

### Using Git
If you are new to using GitHub and have not used Git, download Git from https://git-scm.com/downloads. <br>
Git is a powerful tool and you will most likely use it often in the near fortune. Because of this, I would highly recommend watching this tutorial https://www.youtube.com/watch?v=SWYqp7iY_Tc.

## Running the Project
Run `npm install` in the base directory and go to the /client directory and run `npm install` there again.
Then go back to the base directory (`cd ..`) and start it with `npm run dev`. The project should now be running on localhost:3000

## Tips
* Refer to the past semester report to get a better understanding of the current project <br>
* Dr. Bennett has access to the mongoDB database so he should be able to give new members access. <br>
* The practice page currently shows the idea that we were working towards. It is essentially a hardcoded front-end page of icons that looks like so: <br>
![](/client/src/images/hardcode_page.PNG) <br>

* However, we have created a basic page that connects to the back-end and receives its topics/subtopics from there. The page is located at localhost:3000/topics. 
You should be able to access the subtopics and their subsequent quizzes. This page looks like this: <br>
![](/client/src/images/backend_page.PNG) <br>

