module.exports = (data) => {
  return {
    content: [
      {
        style: "tableExample",
        table: {
          // widths: [200, "auto", "auto"],
          headerRows: 2,
          // keepWithHeaderRows: 1,
          body: [
            [
              {
                text: data.description,
                style: "tableHeader",
                colSpan: 2,
                rowSpan: 2,
                alignment: "center",
              },
              {},
              { text: data.id, style: "tableHeader", alignment: "center" },
            ],
            ["Sample value 1", "Sample value 2", "Sample value 3"],
            [
              {
                rowSpan: 3,
                text: "rowSpan set to 3\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
              },
              "Sample value 2",
              "Sample value 3",
            ],
            ["", "Sample value 2", "Sample value 3"],
            ["Sample value 1", "Sample value 2", "Sample value 3"],
            [
              "Sample value 1",
              {
                colSpan: 2,
                rowSpan: 2,
                text: "Both:\nrowSpan and colSpan\ncan be defined at the same time",
              },
              "",
            ],
            ["Sample value 1", "", ""],
          ],
        },
      },
    ],
    defaultStyle: {
      font: "Helvetica",
    },
    styles: {
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "#fff",
        background: "#2d4154",
        fillColor: "#2d4154",
        alignment: "center",
      },
    },
  };
};
