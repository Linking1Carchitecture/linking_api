FROM node:carbon-slim

# Create app directory
WORKDIR /linking_api

# Install app dependencies
COPY package.json /linking_api/
RUN npm install

# Bundle app source
COPY . /linking_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
