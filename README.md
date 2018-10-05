### GraphQL News

*Hacker News for GraphQL*

[graphql.news](https://graphql.news)

---

## Dev

- [staging.graphql.news](https://staging.graphql.news)
- [Vulcan docs](http://docs.vulcanjs.org)
- [Our CircleCI](https://circleci.com/gh/GraphQLGuide/news/)

### Setup

```
git clone git@github.com:GraphQLGuide/news.git
cd news
npm install
npm start
```

App: [127.0.0.1:3000](http://127.0.0.1:3000/) (Github OAuth doesn't work on localhost)

GraphiQL: [/graphiql](http://127.0.0.1:3000/graphiql)

## Deployment

Periodically the CI will fail because the galaxy login token expires. When it does, Loren needs to:

```
METEOR_SESSION_FILE=token.json meteor login
cat token.json | pbcopy
rm token.json
```

and paste into `METEOR_TOKEN` here: https://circleci.com/gh/GraphQLGuide/news/edit#env-vars
