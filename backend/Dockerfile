# Use the official Node.js Alpine image from the Docker Hub as the base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/backend

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# copy environment variables (adding secret instead)
# COPY .env ./

# Copy the application code to the container
COPY . .

# Expose the port that your app will run on
EXPOSE 4000

# Define the command to run your application
CMD ["npm", "start"]
