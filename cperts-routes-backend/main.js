import express from 'npm:express@4.21.1';
import dotenv from 'npm:dotenv@16.4.7';
import cors from 'npm:cors@2.8.5'
import { Telegraf } from 'npm:telegraf@4.16.3'
// import { message } from 'npm:telegraf@4.16.3/filters'
// import { Client } from 'npm:whatsapp-web.js@1.26.0'
// import qrcode from 'npm:qrcode-terminal@0.12.0'
import fs from 'node:fs';

const app = express();
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(await bot.createWebhook({ domain: 'https://bda6-2c0f-fc89-811c-fb2f-1d87-7246-c139-44aa.ngrok-free.app' }));

bot.on("text", ctx => ctx.reply("Hello"));

app.post('/application', (req, res) => {
    console.log(req.body);
    fs.writeFile(`submissions/application-form-for-${req.body.fullName}.json`, JSON.stringify(req.body, null, 4), (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({success: false, message: 'server error'});
            // return;
        }
    })
    res.status(201).json({success: true, message: 'Done!'});
})

app.post('/english-test', (req, res) => {
    console.log(req.body);
    fs.writeFile(`submissions/test-form-for-${req.body.name}.json`, JSON.stringify(req.body, null, 4), (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({success: false, message: 'server error'});
            // return;
        }
    })
    res.status(201).json({success: true, message: 'Done!'});
})



app.listen(process.env.PORT, (err) => {
    err ? console.log(err) : console.log('server up and running')
});
