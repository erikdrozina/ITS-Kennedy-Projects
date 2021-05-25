const http = require('http');
const {InfluxDB} = require('@influxdata/influxdb-client')

const server = http.createServer(function (request, response) {
  if (request.method == 'POST') {
    
    var body = '';
    request.on('data', function (data) {
      body += data;     
    })
    request.on('end', function () {      
        var json = JSON.parse(body); //parse to JSON
        
        // You can generate a Token from the "Tokens Tab" in the UI
        const token = '0O6oVm1F43S49XcXdnV6saRIskASovJ9GakXWbHSzWEC6h2FCPWuZx79B6jEQJX3bqBEs1STr-agdMs32HnGCQ=='
        const org = 'agridiqu'
        const bucket = 'plcdata'

        const client = new InfluxDB({url: 'http://34.241.224.63:8086', token: token})

        const {Point} = require('@influxdata/influxdb-client')
        const writeApi = client.getWriteApi(org, bucket)
        writeApi.useDefaultTags({host: 'host1'})
        
        const point = new Point('plcsensordata') 
        
        for(var i = 0; i < json.values.length; i++) {
            switch (json.values[i].id) {
                case 'PLCsim.plc2.Silos1_Level1':
                    json.values[i].v == false ? point.intField('Silos1', 0) : point.intField('Silos1', 1)
                    break;
                case 'PLCsim.plc2.Silos1_Level2':
                    json.values[i].v == false ? point.intField('Silos1', 1) : point.intField('Silos1', 2)
                    break;
                case 'PLCsim.plc2.Silos1_Level3':
                    json.values[i].v == false ? point.intField('Silos1', 2) : point.intField('Silos1', 3)
                    break;
                case 'PLCsim.plc2.Silos1_Level4':
                    json.values[i].v == false ? point.intField('Silos1', 3) : point.intField('Silos1', 4)  
                    break;
                case 'PLCsim.plc2.Silos1_Level5':
                    json.values[i].v == false ? point.intField('Silos1', 4) : point.intField('Silos1', 5) 
                    break;
                case 'PLCsim.plc2.Silos1_Level6':
                    json.values[i].v == false ? point.intField('Silos1', 5) : point.intField('Silos1', 6)
                    break;
                case 'PLCsim.plc2.Silos1_Level7':
                    json.values[i].v == false ? point.intField('Silos1', 6) : point.intField('Silos1', 7)
                    break;
                
                case 'PLCsim.plc2.Silos2_Level1':
                    json.values[i].v == false ? point.intField('Silos2', 0) : point.intField('Silos2', 1)
                    break;
                case 'PLCsim.plc2.Silos2_Level2':
                    json.values[i].v == false ? point.intField('Silos2', 1) : point.intField('Silos2', 2)
                    break;
                case 'PLCsim.plc2.Silos2_Level3':
                    json.values[i].v == false ? point.intField('Silos2', 2) : point.intField('Silos2', 3)
                    break;
                case 'PLCsim.plc2.Silos2_Level4':
                    json.values[i].v == false ? point.intField('Silos2', 3) : point.intField('Silos2', 4) 
                    break;
                case 'PLCsim.plc2.Silos2_Level5':
                    json.values[i].v == false ? point.intField('Silos2', 4) : point.intField('Silos2', 5) 
                    break;
                case 'PLCsim.plc2.Silos2_Level6':
                    json.values[i].v == false ? point.intField('Silos2', 5) : point.intField('Silos2', 6)
                    break;
                case 'PLCsim.plc2.Silos2_Level7':
                    json.values[i].v == false ? point.intField('Silos2', 6) : point.intField('Silos2', 7)
                    break;
                
                case 'PLCsim.plc2.Silos3_Level1':
                    json.values[i].v == false ? point.intField('Silos3', 0) : point.intField('Silos3', 1)
                    break;
                case 'PLCsim.plc2.Silos3_Level2':
                    json.values[i].v == false ? point.intField('Silos3', 1) : point.intField('Silos3', 2)
                    break;
                case 'PLCsim.plc2.Silos3_Level3':
                    json.values[i].v == false ? point.intField('Silos3', 2) : point.intField('Silos3', 3)
                    break;
                case 'PLCsim.plc2.Silos3_Level4':
                    json.values[i].v == false ? point.intField('Silos3', 3) : point.intField('Silos3', 4) 
                    break;
                case 'PLCsim.plc2.Silos3_Level5':
                    json.values[i].v == false ? point.intField('Silos3', 4) : point.intField('Silos3', 5) 
                    break;
                case 'PLCsim.plc2.Silos3_Level6':
                    json.values[i].v == false ? point.intField('Silos3', 5) : point.intField('Silos3', 6)
                    break;
                case 'PLCsim.plc2.Silos3_Level7':
                    json.values[i].v == false ? point.intField('Silos3', 6) : point.intField('Silos3', 7)
                    break;
                
                case 'PLCsim.plc2.Silos4_Level1':
                    json.values[i].v == false ? point.intField('Silos4', 0) : point.intField('Silos4', 1)
                    break;
                case 'PLCsim.plc2.Silos4_Level2':
                    json.values[i].v == false ? point.intField('Silos4', 1) : point.intField('Silos4', 2)
                    break;
                case 'PLCsim.plc2.Silos4_Level3':
                    json.values[i].v == false ? point.intField('Silos4', 2) : point.intField('Silos4', 3)
                    break;
                case 'PLCsim.plc2.Silos4_Level4':
                    json.values[i].v == false ? point.intField('Silos4', 3) : point.intField('Silos4', 4)
                    break;
                case 'PLCsim.plc2.Silos4_Level5':
                    json.values[i].v == false ? point.intField('Silos4', 4) : point.intField('Silos4', 5)
                    break;
                case 'PLCsim.plc2.Silos4_Level6':
                    json.values[i].v == false ? point.intField('Silos4', 5) : point.intField('Silos4', 6)
                    break;
                case 'PLCsim.plc2.Silos4_Level7':
                    json.values[i].v == false ? point.intField('Silos4', 6) : point.intField('Silos4', 7)
                    break;
                
                case 'PLCsim.plc2.Silos5_Level1':
                    json.values[i].v == false ? point.intField('Silos5', 0) : point.intField('Silos5', 1)
                    break;
                case 'PLCsim.plc2.Silos5_Level2':
                    json.values[i].v == false ? point.intField('Silos5', 1) : point.intField('Silos5', 2)
                    break;
                case 'PLCsim.plc2.Silos5_Level3':
                    json.values[i].v == false ? point.intField('Silos5', 2) : point.intField('Silos5', 3)
                    break;
                case 'PLCsim.plc2.Silos5_Level4':
                    json.values[i].v == false ? point.intField('Silos5', 3) : point.intField('Silos5', 4)
                    break;
                case 'PLCsim.plc2.Silos5_Level5':
                    json.values[i].v == false ? point.intField('Silos5', 4) : point.intField('Silos5', 5)  
                    break;
                case 'PLCsim.plc2.Silos5_Level6':
                    json.values[i].v == false ? point.intField('Silos5', 5) : point.intField('Silos5', 6)
                    break;
                case 'PLCsim.plc2.Silos5_Level7':
                    json.values[i].v == false ? point.intField('Silos5', 6) : point.intField('Silos5', 7)
                    break;
                
                case 'PLCsim.plc2.Silos6_Level1':
                    json.values[i].v == false ? point.intField('Silos6', 0) : point.intField('Silos6', 1)
                    break;
                case 'PLCsim.plc2.Silos6_Level2':
                    json.values[i].v == false ? point.intField('Silos6', 1) : point.intField('Silos6', 2)
                    break;
                case 'PLCsim.plc2.Silos6_Level3':
                    json.values[i].v == false ? point.intField('Silos6', 2) : point.intField('Silos6', 3)
                    break;
                case 'PLCsim.plc2.Silos6_Level4':
                    json.values[i].v == false ? point.intField('Silos6', 3) : point.intField('Silos6', 4)
                    break;
                case 'PLCsim.plc2.Silos6_Level5':
                    json.values[i].v == false ? point.intField('Silos6', 4) : point.intField('Silos6', 5)
                    break;
                case 'PLCsim.plc2.Silos6_Level6':
                    json.values[i].v == false ? point.intField('Silos6', 5) : point.intField('Silos6', 6)
                    break
                case 'PLCsim.plc2.Silos6_Level7':
                    json.values[i].v == false ? point.intField('Silos6', 6) : point.intField('Silos6', 7)
                    break;
                
                case 'PLCsim.plc2.Silos7_Level1':
                    json.values[i].v == false ? point.intField('Silos7', 0) : point.intField('Silos7', 1)
                    break;
                case 'PLCsim.plc2.Silos7_Level2':
                    json.values[i].v == false ? point.intField('Silos7', 1) : point.intField('Silos7', 2)
                    break;
                case 'PLCsim.plc2.Silos7_Level3':
                    json.values[i].v == false ? point.intField('Silos7', 2) : point.intField('Silos7', 3)
                    break;
                case 'PLCsim.plc2.Silos7_Level4':
                    json.values[i].v == false ? point.intField('Silos7', 3) : point.intField('Silos7', 4)
                    break
                case 'PLCsim.plc2.Silos7_Level5':
                    json.values[i].v == false ? point.intField('Silos7', 4) : point.intField('Silos7', 5)
                    break;
                case 'PLCsim.plc2.Silos7_Level6':
                    json.values[i].v == false ? point.intField('Silos7', 5) : point.intField('Silos7', 6)
                    break;
                case 'PLCsim.plc2.Silos7_Level7':
                    json.values[i].v == false ? point.intField('Silos7', 6) : point.intField('Silos7', 7) 
                    break;
                case 'PLCsim.plc2.TemperaturaS1':
                    point.floatField('temperatura1', json.values[i].v/1000)    
                    break;
                case 'PLCsim.plc2.TemperaturaS2':
                    point.floatField('temperatura2', json.values[i].v/1000) 
                    break;
                case 'PLCsim.plc2.TemperaturaS3':
                    point.floatField('temperatura3', json.values[i].v/1000)  
                    break;
                case 'PLCsim.plc2.TemperaturaS4':
                    point.floatField('temperatura4', json.values[i].v/1000) 
                    break;
                case 'PLCsim.plc2.TemperaturaS5':
                    point.floatField('temperatura5', json.values[i].v/1000)  
                    break;
                case 'PLCsim.plc2.TemperaturaS6':
                    point.floatField('temperatura6', json.values[i].v/1000) 
                    break;
                case 'PLCsim.plc2.TemperaturaS7':
                    point.floatField('temperatura7', json.values[i].v/1000)                   
                    break;          
                default:
                    console.log('INSERT ERROR OR MISSING DATA')
            }         
        }
         
        writeApi.writePoint(point)
        console.log(point);
          writeApi
            .close()
            .then(() => {
              console.log('FINISHED')
            })
            .catch(e => {
              console.error(e)
              console.log('\\nFinished ERROR')
            })
        
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end('post received');
    })
  }
})

const port = 3000;
const host = '127.0.0.1';
server.listen(port, host);
console.log(`Listening at http://127.0.0.1:3000`);