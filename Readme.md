<h1 align="center" id="Title">
<a href="https://api-rest-nc.up.railway.app/" alt="API REST">
<img src="https://raw.githubusercontent.com/NaimCBGhassan/AuthJWT/8e5a365b203410442b86928161a7ac2599917186/client/public/webhook.svg" width="20"/>
API REST
</a>
</h1>

<h2 id="Description">Project Description</h2>
<p>
This is a backend project made with MongoDB Atlas as the database, where you will find three endpoints:

- **./api/item:** with the four basic CRUD operations.
- **./api/auth:** with two POST operations. One to **./register** and, the other to **./login**.
- **./api/order**: with one GET operation. To access this route, you will need to send JSON Web Token in the header. To obtain the token, you must first log in.
</p>

<img src="./src/image.webp" alt="API REST" width="100%"/>

<hr/>

<h2 id="Indice">Indice</h2>

- [Title](#Title)

- [Project Description](#Description)

- [Indice](#Indice)

- [Project status](#Status)

- [Project features](#Features)

- [Access to projects](#Acces)

- [Used technologies](#Technologies)

<hr/>
<h2 id="Status">Project Status</h2>
<p align="center"> ✅ FINISHED ✅</p>

<h2 id="Status">Project Features</h2>

### Item Route

The first route is the item route (./api/item). Here, you will be able to perform the four basic CRUD operations. Additionally, to update, delete, or retrieve only one item, you will need to send its ID as a parameter in the URL.

### Auth route

The second route is the Auth route (./api/auth). To register a new user, you will need to send a [POST] request to "./register". To log in, you should send a [POST] request to "./login". After a successful login, you will receive a JSON Web Token that will allow you to access the order route (./api/oreder).

### Order route

The third route is the order route (./api/order). To access it, you will need to include a JSON Web Token in your request headers. You can obtain this token by logging in through the Auth route.

<hr/>
<h2 id="Acces">Access to projects</h2>

- <img src="https://cdn-icons-png.flaticon.com/512/2742/2742197.png" height="15px"/> [**Open in browser**](https://api-rest-nc.up.railway.app/)

- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFo8KO3onZv_9gir8j3dwtLnY6ADG7qjTng&usqp=CAU" height="15px"/> [**GitHub Repository**](https://github.com/NaimCBGhassan/ApiRest)

<hr/>
<h2 id="Technologies">Used technologies</h2>

### BackEnd

<ul >
  <li>NodeJs</li>
  <li>TypeScript</li>
  <li>ExpressJs</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>JSON Web Token</li>
  <li>BcryptJS</li>
  <li>Cors</li>
  <li>Dotenv</li>
  <li>Morgan</li>
</ul>
