export class Producto{
    id: string;
    nombre: string;
    precio: string;
    createAt: Date;
    foto: string;
    categoria: {nombre: string}[];
}
