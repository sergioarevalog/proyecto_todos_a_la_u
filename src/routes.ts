import { Router, Request, Response } from 'express';
import { pool } from './db';
import { Doctor, Patient, Appointment } from './models';
import { RowDataPacket } from 'mysql2';

const router = Router();

// Rutas para los doctores

router.get('/doctors', async (req: Request, res: Response) => {
  try {
    const [doctors] = await pool.query<RowDataPacket[]>('SELECT * FROM doctors');
    res.json(doctors);
  } catch (error) {
    console.error('Error al obtener los doctores:', error);

    if (error instanceof Error) {
      res.status(500).json({ error: 'Error al obtener los doctores', details: error.message });
    } else {
      res.status(500).json({ error: 'Error al obtener los doctores' });
    }
  }
});

// Rutas para los pacientes
router.get('/patients', async (req: Request, res: Response) => {
  try {
    const [patients] = await pool.query<RowDataPacket[]>('SELECT * FROM patients');
    res.json(patients);
  } catch (error) {
    console.error('Error al obtener los pacientes:', error);

    if (error instanceof Error) {
      res.status(500).json({ error: 'Error al obtener los pacientes', details: error.message });
    } else {
      res.status(500).json({ error: 'Error al obtener los pacientes' });
    }
  }
});

// Rutas para las citas médicas
router.get('/appointments', async (req: Request, res: Response) => {
  try {
    const [appointments] = await pool.query<RowDataPacket[]>('SELECT * FROM appointments');
    res.json(appointments);
  } catch (error) {
    console.error('Error al obtener las citas médicas:', error);

    if (error instanceof Error) {
      res.status(500).json({ error: 'Error al obtener las citas médicas', details: error.message });
    } else {
      res.status(500).json({ error: 'Error al obtener las citas médicas' });
    }
  }
});

export default router;
