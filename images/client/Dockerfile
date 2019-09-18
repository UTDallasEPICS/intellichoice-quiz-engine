# base image
FROM node:10.16.3
MAINTAINER bryanthfung88@gmail.com

# set working directory
#WORKDIR ../client

# add `/app/node_modules/.bin` to $PATH
#ENV PATH ../client/node_modules/.bin:$PATH

# install and cache app dependencies
# RUN npm install 
#--silent
RUN npm install react-scripts@3.0.1 -g
#--silent

# start app
#CMD ["npm", "start"]