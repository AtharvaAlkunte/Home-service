import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ bookingDate: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new booking
router.post('/', async (req, res) => {
  try {
    console.log('Received booking request:', req.body);
    
    // Validate request body
    if (!req.body || !req.body.service || !req.body.customer) {
      console.error('Missing required fields:', req.body);
      return res.status(400).json({ 
        message: 'Missing required fields: service and customer details are required' 
      });
    }

    const { service, customer, status } = req.body;

    // Validate customer details
    if (!customer.name || !customer.phone || !customer.address) {
      console.error('Missing customer details:', customer);
      return res.status(400).json({ 
        message: 'Customer name, phone, and address are required' 
      });
    }

    const booking = new Booking({
      service,
      customer: {
        name: customer.name,
        phone: customer.phone,
        address: customer.address
      },
      status: status || 'Pending'
    });

    const newBooking = await booking.save();
    console.log('Booking created successfully:', newBooking._id);
    res.status(201).json(newBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(400).json({ message: error.message });
  }
});

// Update booking status
router.patch('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (req.body.status) {
      booking.status = req.body.status;
    }

    const updatedBooking = await booking.save();
    res.json(updatedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
