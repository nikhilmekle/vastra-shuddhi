const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Route 1  to create a new service using POST  "/api/serviceRoutes/create"
router.post('/create', async (req, res) => {
    try {
        const service = new Service(req.body);
        await service.save();
        res.status(201).send(service);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Route 2  to get all services GET "/api/serviceRoutes/getallservices"
router.get('/getallservices', async (req, res) => {
    try {
        const services = await Service.find();
        res.send(services);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Route to get a specific service by ID
router.get('/services/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).send();
        }
        res.send(service);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Route to update a service by ID patch "/api/serviceRoutes/updateservice/id"
router.patch('/updateservice/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'categories']; // Add other fields as needed
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!service) {
            return res.status(404).send();
        }
        res.send(service);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Route to delete a service by ID
router.delete('/services/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).send();
        }
        res.send(service);
    } catch (error) {
        res.status(500).send(error);
    }
});





// Route 6: Get Men's Wear items by service ID and category name
router.get('/fetchitemsofmenswear/:serviceId', async (req, res) => {
    try {
        const serviceId = req.params.serviceId;

        // Find the service by ID
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).send({ error: 'Service not found' });
        }

        // Find the Men's Wear category within the service
        const mensWearCategory = service.categories.find(category => category.name === 'Mens Wear');
        if (!mensWearCategory) {
            return res.status(404).send({ error: 'Men\'s Wear category not found' });
        }

        // Extract items data from the Men's Wear category
        const mensWearItems = mensWearCategory.items;

        res.send(mensWearItems);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
