FROM node

WORKDIR /space-ship-adventure-app/

COPY . /space-ship-adventure-app/

RUN npm install --force

CMD ["npm", "run", "prod-build"]