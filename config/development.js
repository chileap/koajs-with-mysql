const port = Number.parseInt(process.env.PORT) || 3000;

module.exports = {
  port: port,
  hostName: 'http://localhost:' + port,
  serveStatic: true,
  assetHost: '',
  secretKeyBase: 'b90321d802cf09ef688b05eb6337efc3422b4e25fe42a311bc4e5ffb268c335590be89f464d3adabfbcfae4b431a5029ad6486bce777caa962d75a18322ea123'
};
