Install Ubuntu from Microsoft Store
https://docs.microsoft.com/en-us/windows/wsl/install-win10

Install WSL 2 Update Kernel
https://docs.microsoft.com/en-us/windows/wsl/wsl2-kernel

Install Docker for WSL
https://docs.docker.com/docker-for-windows/wsl/
https://hub.docker.com/editions/community/docker-ce-desktop-windows/

Add user to docker group to avoid sudo use
sudo groupadd docker
sudo gpasswd -a $USER docker

Install Node.js
Windows 10 Fall Creators Update - Installing Node.js on Windows Subsystem for Linux (WSL)
https://gist.github.com/noygal/6b7b1796a92d70e24e35f94b53722219

Install Yarn
https://classic.yarnpkg.com/en/docs/install/#debian-stable

Configure .git-credentials
https://www.shellhacks.com/git-config-username-password-store-credentials/
git config --global credential.helper store

Configure .npmrc
If problems on test
rmdir ~/.npmrc && touch ~/.npmrc

Download Repo and Run

Install & Configure WebStorm for WSL
https://stackoverflow.com/questions/51912772/how-to-use-wsl-as-default-terminal-in-webstorm-or-any-other-jetbrains-products

Install Gally Globally

-- Tunning, restrict WSL 2 Memory and CPU Usage
https://www.bleepingcomputer.com/news/microsoft/windows-10-wsl2-now-allows-you-to-configure-global-options/
https://medium.com/@lewwybogus/how-to-stop-wsl2-from-hogging-all-your-ram-with-docker-d7846b9c5b37
create .wslconfig file on c:\users\UserName\

[wsl2]
memory=4GB # Limits VM memory in WSL 2 to 4 GB
processors=8 # Makes the WSL 2 VM use eight virtual processors

Restart-Service LxssManager
