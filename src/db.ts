import { createPool } from 'mysql2/promise';

export const pool = createPool({
  host: 'localhost',
  user: 'SERGIO',
  password: 'Checho19-',
  database: 'hospital_db',
  connectionLimit: 10,
});

export async function getConnection() {
  try {
    return await pool.getConnection();
  } catch (error) {
    console.error('Error al obtener la conexión a la base de datos:', error); 
    throw error;
  }
}