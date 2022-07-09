# API Documentation

Pour lancer le projet : 
-> yarn start ou npm start


## Routes Users

### /users POST : Signup
``` http://localhost:8080/api/auth/signup ```

Pour s'inscrire

Body
{

    "name" : "franck",    //required
    "birthday" : "12-12-2000",  //required
    "email" : "test@test.com",  //required
    "password" : "Giro12345@"     //required avec minimum : 1 maj, 1 min, 1 chiffre, 1 symbole
}

{
    "name" : "giro",
    "birthday" : "12-12-2000",
    "email" : "test1@test.com",
    "password" : "Giro12345@"
}

Response :
{
  "message": "User created "
}

### /users/login POST : Login

``` http://localhost:8080/api/auth/login ```


Pour se connecter

Body
{
    "email" : "test@test.com",   //required
    "password" : "Giro12345@"   //required
}

Response :
{
    "userId": "62c5bae3b5f3f817f4d583d5",
    "is_admin": "no",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmM1YmFlM2I1ZjNmODE3ZjRkNTgzZDUiLCJpYXQiOjE2NTcxMjYxNTksImV4cCI6MTY1NzIxMjU1OX0.urf2GQi1GYU0wdFdkm1w22S2HRuxcAWQmg9pHOhTH1k"
}

### /users GET 

``` http://localhost:8080/api/auth ```


Récupérer tous les utilisateurs. (Routes protégés)

Réponse :

[
    {
        "_id": "62c5bae3b5f3f817f4d583d5",
        "name": "franck",
        "birthday": "2000-12-11T23:00:00.000Z",
        "email": "test@test.com",
        "is_admin": "no",
        "password": "$2b$10$.agR95Frjz/t7Zd9py/gWug370OY/63iQVnR4cnzoX0h.birwSZ0y",
        "createdAt": "2022-07-06T16:40:03.394Z",
        "updatedAt": "2022-07-06T16:40:03.394Z",
        "__v": 0
    },
    {
        "_id": "62c5bc9b2c8608e4c7a8b16c",
        "name": "giro",
        "birthday": "2000-12-11T23:00:00.000Z",
        "email": "test1@test.com",
        "is_admin": "no",
        "password": "$2b$10$spCbFkz/RP1P2iovI89MZuGRCc9yze0nQSkZnlll2zBxGCivfAJ/6",
        "createdAt": "2022-07-06T16:47:23.589Z",
        "updatedAt": "2022-07-06T16:47:23.589Z",
        "__v": 0
    }
]



### /users/:id GET

``` http://localhost:8080/api/auth/62c5bae3b5f3f817f4d583d5 ```


Avoir les informations d'un utilisateur   (Routes protégés)

Response :
{
     "_id": "62c5bae3b5f3f817f4d583d5",
    "name": "franck",
    "birthday": "2000-12-11T23:00:00.000Z",
    "email": "test@test.com",
    "is_admin": "no",
    "password": "$2b$10$.agR95Frjz/t7Zd9py/gWug370OY/63iQVnR4cnzoX0h.birwSZ0y",
    "createdAt": "2022-07-06T16:40:03.394Z",
    "updatedAt": "2022-07-06T16:40:03.394Z",
    "__v": 0
}





### /users PUT

``` http://localhost:8080/api/auth/62c5bae3b5f3f817f4d583d5 ```


Modifier un utilisateur      (Routes protégés et accessible uniquemant à un admin)

Body
{

    "name" : "franckooo",
    "birthday" : "12-12-2000",
    "email" : "test22@test.com",
    "password" : "Giro12345@"
}

Response :
{
  "message": "User updated"
}

### /users DELETE

``` http://localhost:8080/api/auth/62c5bae3b5f3f817f4d583d5 ```

Supprimer un utilisateur  (Routes protégés et accessible uniquemant à un admin)


Response :
{
    "message": "Deleted!"
}


<--------------------------------------------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------------------------------------------->






## Routes Task

### /task POST 

``` http://localhost:8080/api/task ``` 

Enregistrer une tâche   (Routes protégés)

Body
{

    "title" : "Task 1",   \\required
    "message": "test task api",
    "author": "62c5bc9b2c8608e4c7a8b16c"    \\required
}


Response :
{
  "message": "task registered"
}


### /task GET 

``` http://localhost:8080/api/task ```


Récupérer toutes les tâches.    (Routes protégés)

Réponse :

[
    {
        "_id": "62c5c95af51c796c0d829622",
        "title": "Task 1",
        "message": "test task api",
        "author": "62c5bc9b2c8608e4c7a8b16c",
        "createdAt": "2022-07-06T17:41:46.568Z",
        "updatedAt": "2022-07-06T17:41:46.568Z",
        "__v": 0
    },
    {
        "_id": "62c5d8b729d90180ac467eeb",
        "title": "Task 2",
        "message": "test2 task api",
        "author": "62c5bc9b2c8608e4c7a8b16c",
        "createdAt": "2022-07-06T18:47:19.829Z",
        "updatedAt": "2022-07-06T18:47:19.829Z",
        "__v": 0
    },
    {
        "_id": "62c5d8c129d90180ac467eed",
        "title": "Task 3",
        "message": "test3 task api",
        "author": "62c5bc9b2c8608e4c7a8b16c",
        "createdAt": "2022-07-06T18:47:29.311Z",
        "updatedAt": "2022-07-06T18:47:29.311Z",
        "__v": 0
    }
]



### /task/:id GET

``` http://localhost:8080/api/task/62c5d8c129d90180ac467eed ```


Récupérer une tâche  (Routes protégés)

Response :
{
     "_id": "62c5d8c129d90180ac467eed",
    "title": "Task 3",
    "message": "test3 task api",
    "author": "62c5bc9b2c8608e4c7a8b16c",
    "createdAt": "2022-07-06T18:47:29.311Z",
    "updatedAt": "2022-07-06T18:47:29.311Z",
    "__v": 0
}





### /task PUT

``` http://localhost:8080/api/task/62c5d8c129d90180ac467eed ```



Modifier une tâche  (Routes protégés)

Body
{

    "title" : "Task 3",
    "message": "test555 task api",
    "author": "62c5bc9b2c8608e4c7a8b16c"
}

Response :
{
  "message": "Task updated"
}

### /task DELETE

``` http://localhost:8080/api/task/62c5d8c129d90180ac467eed ```


Supprimer une tâche   (Routes protégés)


Response :
{
    "message": "Deleted!"
}




## Bonus 

-> Add filtering to the post routes (filter by author and by creation date)

### GET By author 

``` http://localhost:8080/api/task/user/62c5bc9b2c8608e4c7a8b16c  ```


Response :
{
     {
        "_id": "62c5c95af51c796c0d829622",
        "title": "Task 1",
        "message": "test task api",
        "author": "62c5bc9b2c8608e4c7a8b16c",
        "createdAt": "2022-07-06T17:41:46.568Z",
        "updatedAt": "2022-07-06T17:41:46.568Z",
        "__v": 0
    },
    {
        "_id": "62c5d8b729d90180ac467eeb",
        "title": "Task 2",
        "message": "test2 task api",
        "author": "62c5bc9b2c8608e4c7a8b16c",
        "createdAt": "2022-07-06T18:47:19.829Z",
        "updatedAt": "2022-07-06T18:47:19.829Z",
        "__v": 0
    }
}


### GET by date


``` http://localhost:8080/api/task/date/2022-07-06T22:44:18.990+00:00 ```


Response :
{
    {
        "_id": "62c610734b550fe8f350cca9",
        "title": "Task 3",
        "message": "test555 task api",
        "author": "62c5bc9b2c8608e4c7a8b16c",
        "date": "2022-07-06T22:44:18.990Z",
        "createdAt": "2022-07-06T22:45:07.340Z",
        "updatedAt": "2022-07-06T22:45:07.340Z",
        "__v": 0
    }
}



### Test unitaire

OUff la partie où j'ai eu le plus chaud ... mais finalement je l'ai fait 

Pour lancer le test c'est 
-> npm run test 
ou 
-> yarn test

```
        ❯ npm run test

        > afroto@1.0.0 test /home/francky/Rendu/Afroto
        > mocha

        Server is running on port 8080.


        /POST User
        Connected to the database!
            ✔ it should not POST a User (123ms)


        1 passing (147ms)

```

### TypeScript

POur lancer le projet avec typescript c'est 
-> npm run start2 ou yarn start2

À noter que je n'ai pas utilisé du typescript à 100% dans le projet 