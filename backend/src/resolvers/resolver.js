import File from "../models/File";
import User from "../models/User";

export const resolvers = {
    Query: {
        hello: ()=>{
            return "Hello from Graphql"
        }
    }
};