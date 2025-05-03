const sql = require("mssql");

// Configuración de la base de datos
const dbConfig = {
  user: "root",
  password: "root",
  server: "LAPTOP-1BS97DAM\\WINCC",
  database: "BIBLIOTECA",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

// Conexión y obtención de datos de la tabla LIBRO
async function getData() {
  try {
    // Conexión a la base de datos
    await sql.connect(dbConfig);
    console.log("Conectado correctamente a la base de datos.");

    // Consultar los datos de la tabla LIBRO
    const result = await sql.query("SELECT Titulo, Autor, Fecha, ISBN FROM LIBRO");

    // Mostrar los datos en formato tabla
    console.log("\nDatos de la tabla LIBRO:");
    console.table(result.recordset);  // Esto imprime los datos en formato tabla
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
}

// Ejecutar la función
getData();
