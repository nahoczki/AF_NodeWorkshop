# App Factory Node Workshop
This is the NodeJS workshop hosted by the App Factory. In the workshop we go over what NodeJS is and develop a simple Express API that retrieves and stores data using MongoDB. The second part to this is building a React frontend to `GET` and `POST` data from the API

#### Repositories in the series
- [NodeJS](https://github.com/nahoczki/AF_NodeWorkshop)
- React Frontend (Coming soon)

## Resources
- [Presentation](https://docs.google.com/presentation/d/1XTdiEC-RvT1YjDNUWOawYk7fWTgqXsc3DPvQqs2BCFE/edit?usp=sharing)
- [JSON](https://www.json.org/json-en.html)
- [What are RESTful APIs](https://www.redhat.com/en/topics/api/what-is-a-rest-api)
- [NodeJS](https://nodejs.org/en/)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [ExpressJS](https://expressjs.com/)
- [MongooseJS](https://mongoosejs.com/)
- [Morgan](https://github.com/expressjs/morgan)

## Dependencies
- express
  - Used to create the API
- mongoose
  - Used to create the models and communicate with Mongo
- cors
  - Handle cors
- nodemon (development)
  - Ease of development
- dotenv
  - Enables environment variables

## Installation and Running
Make sure, before running, duplicate the .env.template and rename to .env along with providing your Mongo connection URL

#### Installing

```bash
git clone https://github.com/nahoczki/AF_NodeWorkshop
cd AF_NodeWorkshop
npm install
```

#### Environment Variables
`DB_CONNECT` - Set this to your [MongoDB connection URL](https://www.mongodb.com/docs/manual/reference/connection-string/)

#### Running

```bash
npm run start
```
or for hot reloads (dev)
```bash
npm run dev
```
