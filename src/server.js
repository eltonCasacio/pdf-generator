const express = require("express");
const app = express();
var fs = require("fs");

const products = [
  {
    id: 1,
    description: "Description 1",
    price: 100,
    quantity: 233,
  },
  {
    id: 2,
    quantity: "Product 2",
    price: 200,
    description: 322,
  },
];

const fonts = require("./pdf-config/fonts.js");
const myTableLayouts = require("./pdf-config/table-layouts.js");
const docDefinition = require("./pdf-config/doc-definition.js")(products[0]);
var PdfPrinter = require("pdfmake");

app.get("/pdf-generate", async (req, res) => {
  try {
    var printer = new PdfPrinter(fonts);
    var pdfDoc = printer.createPdfKitDocument(docDefinition, {
      tableLayouts: myTableLayouts,
    });
    pdfDoc.pipe(fs.createWriteStream("document.pdf"));
    pdfDoc.end();
    res.send("ok");

    /** RETORNA O PDF PARA QUEM CHAMOU 
        const chunks = []
        pdfDoc.on("data", (chunk) => {
        chunks.push(chunk);
        });
        pdfDoc.end();

        pdfDoc.on("end", () => {
        const result = Buffer.concat(chunks);
        res.end(result);
        });
    */
  } catch (error) {
    console.debug(error);
    res.send("Erro ao gerar PDF");
  }
});

app.listen(3000, () => console.debug("Server started on port 3000"));
