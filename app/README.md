# EatMe Recipes (MVP)

EatMe Recipes app is your **perfect cooking partner**. It makes searching for s perfect recipes a breeze.
 
 Feature list:
 - searching for recipes by **name**
 - searching for recipes by **ingredients**
 - locally storing your **favourite recipes**

Because I've spent about 6h on this app, there is a not fully finished "favourite recipes" feature. This feature allows you to save your favourite recipes locally. But this list **will be empty** on the next browser refresh.

 # Tech
 Underneath EatMe Recipes is a VueJS 2.5 SPA that uses Google's API for suggestions and [RecipePuppy](http://www.recipepuppy.com/) for recipes.
 It's built with the component framework [Vuetifyjs](https://vuetifyjs.com/en/) - rapid prototyping.
 
 Code compiling is done by [Vue CLI](https://cli.vuejs.org/). 
 
 **Dataflow**
  
 From the service data is passed to the "local data store" - VueJs instance (reactive).
 "Local data store" is a VueJS plugin which is available across the app.
 
 The data is presented via "dummy" components.
   
# Requirements
- Node.js 9+
- NPM 5+

## Project setup
```
git clone
```

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

```
visit: http://localhost:4200
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Todo
- unit tests
- e2e tests
