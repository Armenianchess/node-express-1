const fs = require('fs');
const axios = require('axios');

function processFile(path) {
    fs.readFile(path, 'utf8', async function (err, data) {
        if (err) {
            console.log(`Can not read the file ${err}`)
            process.exit(1)
        }


        let urls = data.split('\n').filter(u => u !== '')

        for (let url of urls) {
            let resp

            try {
                resp = await axios.get(url)
            } catch {
                console.error(`Download failed ${url}`)
                continue
            }

            let fileName = new URL(url).hostname;

            fs.writeFile(path, 'utf8', async function (err) {
                if (err) {
                    console.error(`Can not process: ${filename}`)
                }
                console.log(`File is written : ${filename}`)
            })
        }
    })
}

processFile(process.argv[2])