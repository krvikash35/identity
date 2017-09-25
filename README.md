
## Pre-requisite
1. Node v8.4.0 or newer
2. Windows OS and its build tool: `Visual C++ Build Tools` & `Python 2.7` you can install all of these using command `npm install --global --production --add-python-to-path windows-build-tools`. To know more about this tool visit [this link.](https://github.com/felixrieseberg/windows-build-tools)


## Installation
```
npm install jabra-sdk
```

## Quick Example: 

### Single Device Management
```
const jabra = require('@jabra/jabra-sdk');
const readline = require('readline');
let rl = readline.createInterface({input: process.stdin, output: process.stdout});

jabra.on('attach', (device) => {
    console.log(`Jabra device with deviceID ${device.info.deviceID} attached`);
    let retCode = device.lock() //first get the lock of device
    if(retCode !== 0)
        console.log(`could not lock the device due to return error code ${retCode}`);
    handleCLI(device);
})

jabra.on('detach', (deviceID) => {
    console.log(`Jabra device with deviceID ${deviceID} detached`);
})

function handleCLI(device){
    rl.question('Enter 1 to ring, 2 to unring, 3 to exit: ', (answer) => {
        if(answer === '1'){
            let retCode = device.ring(); //ring the device
            if(retCode === 0)
                console.log('device is rining...');
            else
                console.log(`could not ring the device due to return error code ${retCode}`);
            handleCLI(device);
        }
        if(answer === '2'){
            device.unring(); //stop the ringer
            handleCLI(device);
        }
        if(answer === '3')
            process.exit();
    });
}
```

### Multi Device Management
```
const jabra = require('@jabra/jabra-sdk');

let listOfDevice = [];

jabra.on('attach', (device) => {
    listOfDevice.push(device);
});

jabra.on('detach', (deviceID) => {
    let index = listOfDevice.findIndex( (device) => { return deviceID === device.info.deviceID});
    listOfDevice.splice(index, 1);
})

//ring device1... listOfDevice[1].ring();

//ring device0... listOfDevice[0].ring();
```

## Debuging
To debug this module, set below environment variable before running your nodejs process
```
SET DEBUG=jabra:*
```

## API Reference
1. **jabra module:** jabra is a main module. It inherit EventEmitter class.

API Name | API Type | Input | Output | Description 
--- | --- | --- | --- | --- 
`jabra.on('attach')` | Event | NONE | Object:DEVICE  | emit attach event whenever new device is attached, return instance of device
`jabra.on('detach')` | Event | NONE | String:DEVICE_ID | emit detach event whenever attached device is detached & return deviceID of detached device
`jabra.getCurrentAttachedDevices()` | Method | NONE | Map:<DEVICE_ID, DEVICE_INFO> | return the current list(map) of attached devices

2. **Device management API:** below are the method and properties attached to device instance returned by jabra attach event.

API Name | API Type | Input | Output | Description
--- | --- | --- | --- | ---
`device.mute()` | Method | NONE | Number:JABRA_RETURN_CODE| Mute the device
`device.unmute()` | Method | NONE | Number:JABRA_RETURN_CODE| Unmute the device
`device.offhook()` | Method | NONE | Number:JABRA_RETURN_CODE| Offhook(in-call) the device
`device.onhook()`  | Method | NONE | Number:JABRA_RETURN_CODE| OnHook(not-in-call) the device
`device.hold()` | Method | NONE | Number:JABRA_RETURN_CODE| Put device on Hold
`device.resume()` | Method | NONE | Number:JABRA_RETURN_CODE| Remove device from on Hold and put the device in offhook(in-call)
`device.lock()` | Method | NONE | Number:JABRA_RETURN_CODE| lock the device before managing this device to avoid interference from other application
`device.unlock()` | Method | NONE | Number:JABRA_RETURN_CODE| rlease the lock of device so that other application can manage this device
`device.getDeviceInfo()` | Method | NONE | Object:DEVICE_INFO| get device info, see below section of its structure.

3. **DEVICE_INFO:** below sample object structure
```
{ deviceID: 0,
  productID: 1040,
  deviceName: 'Jabra SPEAK 410 USB',
  usbDevicePath: '\\\\?\\hid#vid_0b0e&pid_0410&mi_03&col02#7&2fcf721b&0&0001#{4d1e55b2-f16f-11cf-88cb-001111000030}',
  parentInstanceId: 'USB\\VID_0B0E&PID_0410\\1C48F9A055F1010800',
  errStatus: 0,
  isBTPaired: false,
  dongleName: null,
  variant: '01-03',
  serialNumber: '1C48F9A055F1',
  isInFirmwareUpdateMode: false }
```

3. **JABRA_RETURN_CODE:** below are some of important return code returned on calling device method

Code | Meaning
--- | ---
0  | Success
1  | Unknown Device
2  | Invalid Device
3  | Un-Supported Device
9  | Device is locked
10 | Device is not locked
11 | System Error
