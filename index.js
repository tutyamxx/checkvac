const cheerio = require("cheerio");
const axios = require("axios");
const lineReader = require("line-reader");
const { join } = require("path");

// --| Read the file with Steam Profile URL's
const fileSteamURL = join(__dirname, "steam_urls.txt");

// --| Custom regex to match the official Steam Profile URL
const isSteamProfileURL = /(?:https?:\/\/)?steamcommunity\.com\/(?:profiles|id)\/[a-zA-Z0-9]+/;

// --| Read each line
lineReader.eachLine(fileSteamURL, (line, last) =>
{
    // --| If the URL does not match the Steam Profile format, skip it.
    if(!line.match(isSteamProfileURL))
    {
        console.log(`♻️ Skipped \x1b[33m${line}\x1b[0m because is not a valid Steam Profile URL !`);

        return;
    }

    // --| Get each line
    axios.get(line).then((response) =>
    {
        const $ = cheerio.load(response.data);
        const checkVAC = $(".profile_ban").text().trim();

        // --| Check if profile is VAC banned
        if(checkVAC.includes("Multiple VAC bans on record") || checkVAC.includes(" VAC ban on record"))
        {
            console.log(`🚨 Profile URL: \x1b[34m${line}\x1b[0m is \x1b[31mVAC banned\x1b[0m.`);
        }

        else
        {
            console.log(`✅ Profile URL: \x1b[34m${line}\x1b[0m is \x1b[32mclean\x1b[0m.`);
        }
    });
});