const express = require('express');
const router = express.Router();
const { createTestimonial, getTestimonials, deleteTestimonial, updateTestimonial } = require('../controller/testimonials.controller')

router.get('/getTestimonials', getTestimonials);

router.post('/create-testimonial', createTestimonial);

router.put('/delete-testimonial/:id', deleteTestimonial);

router.put('/update-testimonial/:id', updateTestimonial)



module.exports = router;