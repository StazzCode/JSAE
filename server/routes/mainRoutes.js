import express from 'express';
import mainController from '../controllers/mainController.js';

const router = express.Router();

router.post('/login', mainController.login);
router.post('/register', mainController.register);
router.get('/logout', mainController.logout);

export default router;
