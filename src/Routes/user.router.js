const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user.controller.js');

/**
 * @swagger
 * tags:
 *   name: Subscribers
 *   description: API for managing subscribers
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Subscriber:
 *       type: object
 *       required:
 *         - name
 *         - subscribedChannels
 *         - subscribedDate
 *       properties:
 *         _id:
 *           type: string
 *           description: MongoDB ObjectId
 *         name:
 *           type: string
 *           description: Name of the subscriber
 *         subscribedChannels:
 *           type: array
 *           items:
 *             type: string
 *           description: List of channels the subscriber is subscribed to
 *         subscribedDate:
 *           type: string
 *           format: date-time
 *           description: The date when the subscriber joined
 *       example:
 *         _id: 662c22af83d8b2a7f7bbd1e9
 *         name: John Doe
 *         subscribedChannels:
 *           - Tech World
 *           - Music Mania
 *         subscribedDate: 2025-04-26T09:30:00.000Z
 */

/**
 * @swagger
 * /api/subscribers:
 *   get:
 *     summary: Get all subscribers
 *     tags: [Subscribers]
 *     responses:
 *       200:
 *         description: List of all subscribers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subscriber'
 */
router.get('/subscribers', userController.getAllUsers);

/**
 * @swagger
 * /api/subscribers/names:
 *   get:
 *     summary: Get names of all subscribers
 *     tags: [Subscribers]
 *     responses:
 *       200:
 *         description: List of subscriber names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/subscribers/names', userController.getAllUserNames);

/**
 * @swagger
 * /api/subscribers/{id}:
 *   get:
 *     summary: Get a subscriber by ID
 *     tags: [Subscribers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The subscriber ID
 *     responses:
 *       200:
 *         description: Subscriber found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscriber'
 *       404:
 *         description: Subscriber not found
 */
router.get('/subscribers/:id', userController.getUserById);

/**
 * @swagger
 * /api/new-user:
 *   post:
 *     summary: Create a new subscriber
 *     tags: [Subscribers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - subscribedChannels
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the subscriber
 *               subscribedChannels:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of channels the subscriber is subscribed to
 *     responses:
 *       201:
 *         description: Subscriber created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscriber'
 *       400:
 *         description: Invalid request data
 */
router.post('/new-user', userController.createUser);

/**
 * @swagger
 * /api/update-user/{id}:
 *   post:
 *     summary: Update an existing subscriber by ID
 *     tags: [Subscribers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the subscriber to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the subscriber (optional)
 *               subscribedChannels:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Updated list of subscribed channels (optional)
 *     responses:
 *       200:
 *         description: Subscriber updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscriber'
 *       400:
 *         description: Bad request (Missing ID or update fields)
 *       404:
 *         description: Subscriber not found
 *       500:
 *         description: Internal server error
 */
router.post('/update-user/:id', userController.updateUser);


module.exports = router;