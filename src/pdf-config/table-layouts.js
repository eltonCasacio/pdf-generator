module.exports = {
  hLineWidth: function (i, node) {
    if (i === 0 || i === node.table.body.length) {
      return 0;
    }
    return i === node.table.headerRows ? 2 : 1;
  },
  vLineWidth: function (i) {
    return 0;
  },
  hLineColor: function (i) {
    return i === 1 ? "#f00" : "#aaa";
  },
  paddingLeft: function (i) {
    return i === 0 ? 0 : 8;
  },
  paddingRight: function (i, node) {
    return i === node.table.widths.length - 1 ? 0 : 8;
  },
};
