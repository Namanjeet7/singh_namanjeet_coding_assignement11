# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /lastName_firstName_ui_garden

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build-storybook

# Expose port 8083
EXPOSE 8083

# Command to run Storybook
CMD ["npx", "storybook", "start-storybook", "--port", "8083", "-s", "public"]

