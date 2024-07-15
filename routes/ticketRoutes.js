const express = require('express');
const { createTicket, updateTicket, deleteTicket, getTicket, getAllTickets } = require('../controllers/ticketController');
const router = express.Router();

router.post('/', createTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);
router.get('/:id', getTicket);
router.get('/', getAllTickets);

module.exports = router;
