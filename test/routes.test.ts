import request from 'supertest';
import app from '../src/app';

describe('Pruebas para las rutas de la API', () => {
  it('Debería devolver el listado de doctores', async () => {
    const response = await request(app).get('/api/doctors');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Debería devolver el listado de pacientes', async () => {
    const response = await request(app).get('/api/patients');
    expect(response.status).toBe(200); // Corregido a 200
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Debería devolver el listado de citas médicas', async () => {
    const response = await request(app).get('/api/appointments');
    expect(response.status).toBe(200); // Corregido a 200
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('Debería crear un doctor', async () => {
    const newDoctor = {
      name: 'Sergio',
      lastname: 'Arevalo',
      specialty: 'Medicina general',
      office: '101',
      email: 'correo@doctor.com',
    };

    const response = await request(app).post('/api/doctors').send(newDoctor);
    expect(response.status).toBe(200); // Corregido a 200
    expect(response.body).toBeDefined();
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe(newDoctor.name);
  });
});
