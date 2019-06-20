# fantasy-league-api
Rest API for cricket fantasy league

## Installation
- Clone the repo and navigate into the project directory.
- Install dependencies with the command: `npm install`
- Type in the following command to create a `.env` file:
`cp example.env .env`
- create a copy of production.js file in `config/` directory and name it development.js by issuing following command: 
`cp config/production.js config/development.js`
- Change env attribute of development.js file to `development`
- To create and migrate the database:
```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
- Start the server with the command: `npm start`

## API Endpoints
- User Login  
 
```
signup:

POST  localhost:3000/api/auth/signup

body params: 
{
	"username": "salmaan",
	"mobile": "9501903748",
	"password": "test123"
}
```
```
login:

POST localhost:3000/api/auth/login

body params: 
{
	"mobile": "9501903748",
	"password": "test123"
}
```

- List of matches categorised by past, upcoming and live
```
GET  localhost:3000/api/matches?status=upcoming
GET  localhost:3000/api/matches?status=live
GET  localhost:3000/api/matches?status=past
```

- List of leagues. Each league should have slots, entry fee, winning amount and type.
```
GET  localhost:3000/api/leagues/
```

- Create squad for a match. Each user can create a maximum of 8 squads in a match. 
```
POST  localhost:3000/api/squads/

body params:
{
	"name": "squad 1",
	"playerIds": [2,4,1],
	"matchId": 2
}
```

- Join League. User can join a league with maximum 8 of their squads.
```
POST  localhost:3000/api/leagues

body params:
 {
	"leagueId": 1,
	"squadIds": [1,2,3]
}
 ```
