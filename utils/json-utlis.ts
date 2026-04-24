import fs from "node:fs";

const JSON_FILE='test-data/data.json'

class JsonUtils {
    // static getJsonData(): any {
    //     const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'))
    //     return data;
    // }

    // static getJsonDataUsingKey(key:string): any {
    //     const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'))
    //     return data[key];
    // }

    static getJson(key?:string): any {
        const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf-8'))
        if(key==undefined)
        {
            return data;
        }
        return data[key];
    }
}


