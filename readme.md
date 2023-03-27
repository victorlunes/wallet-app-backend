# Wallet app API (back-End)

## intro

this is API created using Node.js, Express and PG.

## Requirements

- Node.js
- Docker

## Steps to run the projets

1 Clone the project

```
git clone https://github.com/victorlunes/wallet-app-backend.git
```

2 navigate to project folder and Install Dependencies

```
cd wallet-app-backend
npm install
```

3 Create an PG instance no Docker
```
Example:
docker run --name postgres-finances -e POSTGRES_PASSWORD=docker -e POSTGRES_user=docker -p 
5432:5432 -d -t postgres

```
4. Create a .env file following the example:
```
DB_USER=docker
DB_PASSWORD=docker
DB_NAME=finances
DB_HOST=localhost
DB_PORT=5432
```
5. Run config script to create database and tables:
```
npm run config:init
Observation: if dont´t stop press CTRL + C
```

6. Run the project in dev version: 

```
npm run start:dev
```
7. Run the project in final version: 

```
npm run start
```
# Documentation: 
Use insomnia to import the file bellow: 
https://github.com/victorlunes/wallet-app-backend/blob/master/Insomnia.json