export interface Doctor {
    id?: number;
    name: string;
    lastname: string;
    specialty: string;
    office: string;
    email: string;
  }
  
  export interface Patient {
    id?: number;
    name: string;
    identification_number: string;
    lastname: string;
    age: number;
    phone: string;
  }
  
  export interface Appointment {
    id?: number;
    patient_id: number;
    doctor_id: number;
    specialty: string;
  }
  