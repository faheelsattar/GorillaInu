import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/ckx6d5a1m5fud01xp3qlkbyqy/master",
  cache: new InMemoryCache(),
});
