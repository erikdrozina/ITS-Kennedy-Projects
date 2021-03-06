var redis = require('redis')
//estamblish communication with influx db
const {InfluxDB} = require('@influxdata/influxdb-client')

var clientRedis = redis.createClient({
    host: '127.0.0.1',
    port: 6379
}) //using default 127.0.0.1:6379

clientRedis.on('connect', function() {
    console.log('connected');
});

clientRedis.on("error", function (error) {
    console.error(error);
});

//influxdb token for client authentication
const token = '0O6oVm1F43S49XcXdnV6saRIskASovJ9GakXWbHSzWEC6h2FCPWuZx79B6jEQJX3bqBEs1STr-agdMs32HnGCQ=='
const org = 'agridiqu'
const bucket = 'plcdata'

//connection string
const client = new InfluxDB({url: 'http://34.244.201.108:8086', token: token})

const {Point} = require('@influxdata/influxdb-client')
const writeApi = client.getWriteApi(org, bucket)
writeApi.useDefaultTags({host: 'host1'})

//create point with measurement name
const point = new Point('plcsensordata')

read()

function read() {
    //get and remove the first left element in Redis list
    clientRedis.lpop(["datatest"], function (err, reply) {      
        var json = JSON.parse(reply) //JSON parse
        //if the information is present it proceeds with the acquisition
        if (json != null) {         
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
            //write data into influx db
            writeApi.writePoint(point)
            //pauses the function for five seconds
            setTimeout(read, 5000)      
            console.log("Popped item", json);
        }else {
            console.log("EMPTY QUEUE, WAITING DATA")
            setTimeout(read, 5000)           
        }               
    });  
}







