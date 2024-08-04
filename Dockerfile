# Use the official Node.js image as the base image
FROM node:22

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Make the port 3000 available to the world outside this container
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
