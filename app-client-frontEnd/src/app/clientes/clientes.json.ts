import { Cliente } from './cliente';


export const CLIENTES: Cliente[] = 

[
    {
      id: 1, nombre: 'Hector', apellido: 'Cano', email: 'hcano@cano.com', createAt: '2024-05-25',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 2, nombre: 'Maria', apellido: 'Gomez', email: 'mgomez@gomez.com', createAt: '2024-05-26',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 3, nombre: 'Juan', apellido: 'Perez', email: 'jperez@perez.com', createAt: '2024-05-27',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 4, nombre: 'Ana', apellido: 'Lopez', email: 'alopez@lopez.com', createAt: '2024-05-28',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 5, nombre: 'Luis', apellido: 'Martinez', email: 'lmartinez@martinez.com', createAt: '2024-05-29',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 6, nombre: 'Laura', apellido: 'Garcia', email: 'lgarcia@garcia.com', createAt: '2024-05-30',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 7, nombre: 'Carlos', apellido: 'Rodriguez', email: 'crodriguez@rodriguez.com', createAt: '2024-05-31',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 8, nombre: 'Elena', apellido: 'Fernandez', email: 'efernandez@fernandez.com', createAt: '2024-06-01',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 9, nombre: 'Diego', apellido: 'Sanchez', email: 'dsanchez@sanchez.com', createAt: '2024-06-02',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    },
    {
      id: 10, nombre: 'Sofia', apellido: 'Ramirez', email: 'sramirez@ramirez.com', createAt: '2024-06-03',
      cargarDatos: function (data: any): void {
        throw new Error('Function not implemented.');
      }
    }
  ];