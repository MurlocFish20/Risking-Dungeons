const fs = require('fs')

const jsonData = require('./data/items.json')

//#region create Functions
const createGreenItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.green.push(newItem)
}
const createWhiteItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.white.push(newItem)
}
const createRedItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.red.push(newItem)
}
const createVoidItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.void.push(newItem)
}
const createLunarItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.lunar.push(newItem)
}
const createEquipmentItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.equipment.push(newItem)
}
const createBossItem = (name, description) => {
    let newItem = {
        "name": "",
        "description": ""
    }
    newItem.name = name
    newItem.description = description
    jsonData.boss.push(newItem)
}
//#endregion

fs.writeFileSync('./data/items.json', JSON.stringify(jsonData, null, 2))