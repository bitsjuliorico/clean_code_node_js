import { Router } from 'express';
import {
  createOffice,
  getOffices,
  getOfficeById,
  updateOffice,
  deleteOffice,
} from '../controllers/OfficeController';

const router = Router();

router.post('/offices', createOffice);
router.get('/offices', getOffices);
router.get('/offices/:id', getOfficeById);
router.put('/offices/:id', updateOffice);
router.delete('/offices/:id', deleteOffice);

export default router;