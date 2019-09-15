# auto-git
I needed a little script to check for git updates then to pull, install, and build my various apps.  So this is what I came up with.  The end result is a pretty powerful little app for running command line scripts from within node.

# Purpose
I made this as a quick-and-dirty version of Gitlab's Runner app.  Frankly, their pipelines weren't working for me, so decided to build something that I knew would serve my needs.  Instead of setting up Jenkins, or some other 3rd party services, this ended up being a simple (and secure) alternative to my CI/CD needs.  This specific version performs a few key tasks.   First it cd's into my specified app folder that is synced with a git repo.  Then it calls 'git status' to check if there are any updates for that branch.  If updates are found, it then performs a 'git pull' && 'sudo npm install' && 'sudo quasar build".  The end result means that my servers will rebuild everytime the repo is updated.    

# Note-worthy
1. The app assumes you have properly configured your server to pull from your Git Repo.  
2. The app checks for git updates every 30-seconds.   This can easily be updated in the config/default.json file.
3. You can adjust this to handle any repetitive tasks, not just GIT calls.  
4. Works with any Source-management service (GitHub,GitLab,BitBucket..)
5. The world is your oyester.

# Setup
1. npm i auto-git
2. npm i pm2 -g  (I use this just to keep the app running in the background)
3. change the config/default.json settings to match your project requirements.
4. run pm2 start index.js --name git-puller

That's it.
