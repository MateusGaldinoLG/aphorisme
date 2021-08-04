# Aphorism

![home example](/ReadmeImage/AphorismeHome.png)
![Login example](/ReadmeImage/AphorismeLogin.png)
![profile example](/ReadmeImage/AphorismeProfile.png)
![writing example without author](/ReadmeImage/AphorismeWriting2.png)
![writing example with author](/ReadmeImage/AphorismeWriting.png)
![Searching author example](/ReadmeImage/SearchAuthor.png)
![Searching User example](/ReadmeImage/SearchUser.png)
![Seeing another userpage example](/ReadmeImage/UserPage.png)

## Description

Aphorisme is a social network based on aphorisms, a short length style of text used in areas such as philosophy and literature. Every user can publish their own aphorism and rate on the aphorisms of others.  
This is a side project and can be used locally but is not production ready

## Technologies used

As a fullstack project, many technologies were used, namely:

* Front end:

Nuxt - Vue - Bootstrap Vue - scss

* Back end:

Express - Typescript - Typeorm - Postgres

This stack could also me called PEVN (PostgresQL - Express - Vuejs - Node)js, in comparison to the PERN (PostgresQL - Express - Reactjs - Nodejs)

## How to run

To run this program, you need to have Node.js and NPM.  
First clone this projet by running

```bash
    git clone https://github.com/MateusGaldinoLG/aphorisme.git
```

Than download each folder's packages:

```bash
    # backend
    cd backend
    npm install

    # frontend
    cd aphorisme
    npm install
```

For running, open two prompts and run in each:

```bash
    # backend
    cd backend
    npm run dev

    # frontend
    cd backend
    npm run dev
```

### Backend setup

The backend uses PostgresQL and Typeorm, to set up it rightly follow this steps:

1. Go to the ormconfig.json file and rename user to your postgres user and password to your postgres password

```JSON
// ormconfig.json
{
    // ...
    "username": "your username here",
    "password": "your password here",
    // ...
}
```

2. Go to your Postgres setup and create an aphorisme database

```bash
    # in prompt
    createdb aphorisme -O #owner name
    # or in psql
    CREATE DATABASE aphorisme with OWNER #name here
```

3. Run all typeorm migrations with the npm cli

```bash
    cd backend
    npm run typeorm-run
```
