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
                case 'PLCsim.plc2.umidita':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    var v11 = parseFloat(v12)
                    point.floatField('umidity', v11)
                    break;
                case 'PLCsim.plc2.Silos1_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    var bool_value = v12 == "true" ? 1 : 0
                    if (bool_value == 1){
                        var sl1 = 1
                    }
                    else {
                        console.log("Parse conversion ERROR S1 L1")
                    }
                    point.floatField('Silos1_Level1', sl1)    
                    break;
                case 'PLCsim.plc2.Silos1_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos1_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos1_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos1_Level3', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos1_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos1_Level4', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos1_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos1_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos1_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos1_Level6', bool_value)  
                    break;                
                case 'PLCsim.plc2.Silos1_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos1_Level7', bool_value)  
                    break;  
                case 'PLCsim.plc2.Silos2_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level1', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos2_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos2_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level3', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos2_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level4', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos2_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos2_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level6', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos2_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos2_Level7', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level1', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level3', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level4', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level6', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos3_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos3_Level7', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level1', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level3', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level4', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level6', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos4_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos4_Level7', bool_value)
                    break;
                case 'PLCsim.plc2.Silos5_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level1', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos5_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos5_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level3', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos5_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level4', bool_value)
                    break;
                case 'PLCsim.plc2.Silos5_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos5_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level6', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos5_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos5_Level7', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos6_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level1', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos6_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos6_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level3', bool_value)
                    break;
                case 'PLCsim.plc2.Silos6_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level4', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos6_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos6_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level6', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos6_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos6_Level7', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos7_Level1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level1', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos7_Level2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level2', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos7_Level3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level3', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos7_Level4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level4', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos7_Level5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level5', bool_value)  
                    break;
                case 'PLCsim.plc2.Silos7_Level6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level6', bool_value) 
                    break;
                case 'PLCsim.plc2.Silos7_Level7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");           
                    var bool_value = v12 == "true" ? 1 : 0
                    point.floatField('Silos7_Level7', bool_value)   
                    break;
                case 'PLCsim.plc2.TemperaturaS1':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura1', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura1', temp)
                    }
                    else {
                      console.log('Temp1 conversion ERROR!')
                    }   
                    break;
                case 'PLCsim.plc2.TemperaturaS2':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura2', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura2', temp)
                    }
                    else {
                      console.log('Temp2 conversion ERROR!')
                    }   
                    break;
                case 'PLCsim.plc2.TemperaturaS3':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura3', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura3', temp)
                    }
                    else {
                      console.log('Temp3 conversion ERROR!')
                    }   
                    break;
                case 'PLCsim.plc2.TemperaturaS4':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura4', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura4', temp)
                    }
                    else {
                      console.log('Temp4 conversion ERROR!')
                    }   
                    break;
                case 'PLCsim.plc2.TemperaturaS5':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura5', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura5', temp)
                    }
                    else {
                      console.log('Temp5 conversion ERROR!')
                    }   
                    break;
                case 'PLCsim.plc2.TemperaturaS6':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura6', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura6', temp)
                    }
                    else {
                      console.log('Temp6 conversion ERROR!')
                    }   
                    break;
                case 'PLCsim.plc2.TemperaturaS7':
                    var v2 = json.values[i].v;
                    var v12 = v2.toString().replace(/"/," ");
                    if(v12.length == 6) {
                      var arr = [v12.substr(0, 3) + "." + v12.substr(4)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura7', temp)
                    }
                    else if(v12.length == 5) {
                      var arr = [v12.substr(0, 2) + "." + v12.substr(3)];
                      var temp = parseFloat(arr);
                      point.floatField('temperatura7', temp)
                    }
                    else {
                      console.log('Temp7 conversion ERROR!')
                    }   
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