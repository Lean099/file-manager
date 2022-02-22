import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { graphqlUploadExpress } from 'graphql-upload';
import { typeDefs } from './schemas/schema'
import { resolvers } from './resolvers/resolver'
import cors from 'cors'
import './database'

export async function main(){

    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    })

    await server.start()

    const app = express();

    app.use(cors());

    app.set('port', process.env.PORT || 3001);

    app.use(graphqlUploadExpress());

    server.applyMiddleware({ app });

    await new Promise(r => app.listen(app.get('port'), r));

    console.log(`🚀 Server ready at http://localhost:${app.get('port')}${server.graphqlPath}`);
}
