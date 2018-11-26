const express = require('express')
const app = express()
const port = 3000
// app.js 
// Only parts added to get swagger-jsdoc and swagger-ui working are shown

// Swagger and swagger-jsdoc
const swaggerJSDoc = require('swagger-jsdoc');
// Swagger UI for express used to serve swagger-ui with output of swagger-jsdoc
const swaggerUi = require('swagger-ui-express');


// swagger definition
const swaggerDefinition = require('./swagger-def.js')
console.log(swaggerDefinition)

// initialize swaggerJSDoc generator (outputs swagger docs as JSON to variable)
const swaggerSpec = swaggerJSDoc({
	swaggerDefinition,
  apis: ['index.js'],
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 */
app.get('/users', (req, res) => res.send('Hello World!'))

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags:
 *       - users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tarun
 *         description: user object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/user'
 *     responses:
 *       200:
 *         description: Successfully created
 */

app.post('/users', (req, res) => res.send('Hello World!'))


/**
 * @swagger
 * definition:
 *   users:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
