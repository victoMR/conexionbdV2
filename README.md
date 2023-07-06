# React y Prisma 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Your app is ready to be deployed!

<br></br>

Esta app web esta conectada con mi base de datos alojada en mi computadore en mysql workbench
la caual tiene 3 botones 

<br></br>

![image](https://github.com/victoMR/conexionbdV2/assets/77412296/2fe5cfd3-c76f-4958-8a3a-20e78ff98b1a)
<br></br>
donde el boton productos nos despliega los priductos de nuestra base de datos :
![image](https://github.com/victoMR/conexionbdV2/assets/77412296/b4093362-4a66-4858-9c39-2389b1b3d5db)
<br></br>
y el boton trancaccion 1 nos agregara un nuevo producto:7
![image](https://github.com/victoMR/conexionbdV2/assets/77412296/a854cf63-5344-4394-b729-f9bbe1d24ac2)
<br></br>
la cual seria:
<br></br>

```Javascript
        const result = await prisma.$transaction(async (prisma) => {
        try {
          const createdProduct = await prisma.product.create({
            data: {
              id_product: 21, // Este nombre de campo es incorrecto a propósito en veces el original es id_product
              nom_product: 'Michelada',
              desc_product: 'Tremendo michelon',
              price_product: 1, //eliminar debidoa que cuata un peso
              id_stock1: 2, // Proporcionar aquí el ID de la tienda
              id_pro1: 2, // Proporcionar aquí el ID del proveedor
              cat_id1: 2, // Proporcionar aquí el ID de la categoría
            },
          });
```
<br></br>
  y el boton eliminar eliminaria nuestro nuevo registro
  ![image](https://github.com/victoMR/conexionbdV2/assets/77412296/fac1b6b2-7c90-49a1-b3d7-eb80fedf25b2)
  <br></br>
  
```Javascript
      const result = await prisma.$transaction(async (prisma) => {
        try {
          await prisma.product.delete({
            where: {
              id_product: 21,
            },
            include: {
              included: true,
            },
          });
```
  
