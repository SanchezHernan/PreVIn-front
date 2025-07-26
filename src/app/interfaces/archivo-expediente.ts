export interface ArchivoExpediente {
    descripcion: string;
    nombreArchivo: string;
    estado: 'aprobado' | 'rechazado' | 'pendiente';
    mensajeEstado?: string;
}
