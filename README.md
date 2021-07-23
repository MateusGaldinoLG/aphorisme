# Aphorism

![home example](/ReadmeImage/AphorismeHome.png)
![profile example](/ReadmeImage/AphorismeProfile.png)

## Description

Aphorisme is a social network based on aphorisms, a short length style of text used in areas such as philosophy and literature. Every user can publish their own aphorism and rate on the aphorisms of others.  
This is a side project and can be used locally but is not production ready

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
    createdb aphorisme
    # or in psql
    CREATE DATABASE aphorisme with OWNER #name here
```

3. Run all typeorm migrations with npm cli

```bash
    cd backend
    npm run typeorm-run
```
