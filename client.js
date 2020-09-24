const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data)=> {
    console.log(data);
  })
  conn.on('connect', () => {
    console.log('connected');
  })
  conn.on('connect', () => {
    conn.write('Name: MSA')
  })
  // conn.on('connect', () => {
  //   conn.write('Move: up')
  //   setInterval(() => {conn.write('Move: left')}, 100)
  // })
 
  

  return conn;
}


module.exports = connect