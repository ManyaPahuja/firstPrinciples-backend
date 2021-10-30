const testimonialSchema = require('../models/testimonial.schema');

exports.createTestimonial = async (req, res) => {
    try {
        const Testimonial = await new testimonialSchema();
        Testimonial.id = req.body.id;
        Testimonial.photo = req.body.photo;
        Testimonial.name = req.body.name;
        Testimonial.postBy = req.body.postBy;
        Testimonial.description = req.body.description;

        const testimonialData = await Testimonial.save();

        return res.status(200).json({
            success: true,
            data: testimonialData
        })

    } catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

exports.getTestimonials = async (req, res) => {
    try {
        const testimonialData = await testimonialSchema.find()

        return res.status(200).json({
            success: true,
            data: testimonialData
        })

    } catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

exports.updateTestimonial = async (req, res) => {
    try {
        const testimonial = await testimonialSchema.findByIdAndUpdate({ _id: req.params.id }, { ...req.body
        }, {new: true})

        return res.status(200).json({
            success: true,
            data: testimonial
        })

    } catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}

exports.deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await testimonialSchema.findByIdAndUpdate({ _id: req.params.id }, {
            active: 0
        }, {new: true})

        return res.status(200).json({
            success: true,
            data: testimonial
        })

    } catch(err) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
}