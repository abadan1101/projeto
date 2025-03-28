configurar vps
https://m.youtube.com/watch?v=aBOqZZ96aJs&t=141s&pp=ygUYY29uZmlndXJhciB2cHMgaG9zdGluZ2Vy


comandos linux
https://m.youtube.com/watch?v=CP8-s8aP5Uw


instalar ssh no computador
abrir terminal do windows como admin e executar
ssh-keygen -t ed25519 -C "abadankaristad@gmail.com"
copiar a chave pública e colar na hostinguer


instalar o extenção remote ssh no vscode
se conectar ao servidor vps com o vscode
ssh root@69.62.88.125


apontar dominio para vps
https://m.youtube.com/watch?v=ObTEwRLr-7s&pp=ygUiQ29tbyBzdWJpciBmcm9udGVuZCB2cHMgaG9zdGluZ3Vlcg%3D%3D


postar api na vps
https://m.youtube.com/watch?v=pIvHp7sk2UA&t=808s&pp=ygUUQXBpIG5vIHZwcyByb3N0b25nZXI%3D
instalar o git: sudo apt install git
instalar o npm: sudo apt install npm
criar pasta do projeto e entrar na pasta
clonar repositórios do github: git clone https://github.com/abadan1101/projeto
instalar as dependências do backend e do frontend em suas respectivas pastas: npm install
para conectar o backend executar o pm2 dentro da pasta src
pm2 start index.js --name "backend"
para conectar o frontend, adicionar o script no final do package.json
"apps": [
        {
            "name": "frontend",
            "script": "npm",
            "args" : "start"
}
]
comando: pm2 start package.json
verificar se as portas estão online
comando: pm2 list

voltar para o root e instalar o nginx: sudo apt install nginx
colar no final do arquivo /etc/nginx/sites-avilable/default do nginx antes de instalar o certbot:
server {
    server_name abadankaristad.shop www.abadankaristad.shop; # Adicionar o seu domínio, tanto sozinho quanto com www.
    location / {
        proxy_pass http://localhost:3000; # Supondo que sua API esteja rodando na porta 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
}
}
verificar se o arquivo está lincado no /etc/nginx/sites-enabled
verificar se deu certo: sudo nginx -t
recarregar o nginx: sudo systemctl reload nginx
instalar o certbot: sudo apt install certbot python3-certbot-nginx
instalar o ssl: sudo certbot --nginx -d abadankaristad.shop -d www.abadankaristad.shop
veridicar se o certificado ssl foi instalado no /etc/nginx/sites-available/default




nginx avançado
https://m.youtube.com/watch?v=GoexR4iPVGw&pp=ygUSRG9taW5pbyB2cHMgbmdpbmV4
----------------------------------------------------------------
