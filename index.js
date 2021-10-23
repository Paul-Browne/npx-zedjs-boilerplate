#!/usr/bin/env node
import fs from "fs-extra";
import {join} from "path";

const base = process.argv[1].replace(".bin/", "");
const directory = process.argv[2];
if(directory){
    fs.copy(join(base, "files"), join(process.cwd(), directory), err => {
        if (err) return console.error(err)
        console.log('success!')
    })
}
