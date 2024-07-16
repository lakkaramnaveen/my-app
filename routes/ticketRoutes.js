// Import required modules
const express = require('express');
const { createTicket, updateTicket, deleteTicket, getTicket, getAllTickets } = require('../controllers/ticketController');

// Create a new router instance
const router = express.Router();

/**
 * @route POST /tickets
 * @description Create a new ticket
 * @access Public (can be restricted based on implementation)
 */
router.post('/', createTicket);

/**
 * @route PUT /tickets/:id
 * @description Update an existing ticket by ID
 * @access Public (can be restricted based on implementation)
 */
router.put('/:id', updateTicket);

/**
 * @route DELETE /tickets/:id
 * @description Delete a ticket by ID
 * @access Public (can be restricted based on implementation)
 */
router.delete('/:id', deleteTicket);

/**
 * @route GET /tickets/:id
 * @description Get a ticket by ID
 * @access Public (can be restricted based on implementation)
 */
router.get('/:id', getTicket);

/**
 * @route GET /tickets
 * @description Get all tickets
 * @access Public (can be restricted based on implementation)
 */
router.get('/', getAllTickets);

// Export the router to be used in other parts of the application
module.exports = router;
