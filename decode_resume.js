import fs from "fs";
import bencode from "bencode";

const path = "C:/Users/Sarhad/AppData/Roaming/BitTorrent/resume.dat";

const data = fs.readFileSync(path);
const decoded = bencode.decode(data);

console.log(JSON.stringify(decoded, null, 2));
