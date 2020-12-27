<p align="center">
  <img src="https://i.imgur.com/2SODyxU.png"><br/>
</p>

# Check Steam Profile URL VAC status

🚨 A simple tool to check multiple Steam Profile URL's for VAC bans from a .txt file

# Why I created this?

When doing Overwatch cases in CS:GO, I tend to save the steam profiles of the suspects to check them later if they got banned or not.

# How to use

1. Edit `steam_urls.txt` and add a Steam Profile URL on each line
2. In the project folder, run `npm install` to install the necessary modules.
3. finally, run `node index.js` and it will return if a Steam Profile is VAC banned or not. See image above.

# Example of a proper steam_urls.txt file

```bash
https://steamcommunity.com/id/somerandomidname
https://steamcommunity.com/profiles/12345678901234567/
https://steamcommunity.com/id/teststeamprofile
https://www.youtube.com/
https://www.reddit.com/r/Steam/
```
