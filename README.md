# Udacity: Build A Storefront Backend

This is a backend API build in Nodejs for an online store. It exposes a RESTful API that will be used by the frontend developer on the frontend. 

The database schema and and API route information can be found in the `REQUIREMENTS.md` file. 

## Installation Instructions
This section contains all the packages used in this project and how to install them. However, you can fork this repo and run the following command at the root directory to install all packages.

`$ yarn`

### Packages

---------------
#### express
`npm i -S express`
`npm i -D @types/express`

#### typescript
`npm i -D typescript`

#### db-migrate
`npm install -g db-migrate`

#### g
`npm install -g n`

#### rimraf 
`npm install --save rimraf`

#### cors
`npm install --save cors`

#### bcrypt
`npm -i bcrypt`
`npm -i -D @types/bcrypt`

#### morgan 
`npm install --save morgan`
`npm -i -D @types/morgan`

#### jsonwebtoken
`npm install jsonwebtoken --sav`
`npm -i -D @types/jsonwebtoken`

#### jasmine
`npm install jasmine @types/jasmine --save-dev`

#### request
`npm install --save request`

#### babel 
`npm install --save-dev @babel/cli @babel/core @babel/preset-env`

## Set up Database
### Create Database

- connect to the default postgres database as the server's root user `psql -U postgres`
- In psql run the following to create a user 
    - `CREATE USER shopping_user WITH PASSWORD 'password123';`
- In psql run the following to create the database
    - `CREATE DATABASE shopping;`
- Connect to the database and grant all privileges 
    - `\c shopping`
    - `GRANT ALL PRIVILEGES ON DATABASE shopping TO shopping_user;`

### Migrate Database
Navigate to the root directory and run the command below to migrate the database 

`db-migrate up -m ./_Database/migrations     --config ./_Database/config/dev.json `

!['migrate database'](./docs/migrate_up.png)


## Endpoint Access
All endpoints are described in the `REQUIREMENTS.md` file. 

## Token and Authentication
Tokens are passed along with the http header as 
```
Authorization   Bearer <token>  
```

Tokens are generated for each user during creation. This makes it impossible to create a user at this stage because no token is available(Maybe there is a better way).


## Testing
Run test with 

1. First compile the code with babel: `npm run build-dist-babel`
2. Run test: `npm run test`



## Difficulties
Maybe I am missing something, but so far, these are the difficulties I faced and I'll be grateful if help is provided. 

- I couldn't write test for both my models and endpoints with jasmine as I didn't know how to test APIs wiithout hitting the database. Also, the way my model and controllers are setup, I don't know how to write test for my models and to also mock the pool query. 
- it is required that we secure the route that initiates the creation of new users and also it is required that we generate tokens for each user. This means we won't be able to create any new user because initially, there is no user and so, no token. 
