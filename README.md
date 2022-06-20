# BDAI Events

### SSH ([docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html))

1. Change key permission (one time only)

```
sudo chmod 600 instance_key.pem
```

2. Access the server

```
ssh -i instance_key.pem ubuntu@0.0.0.0
```

### Node 16 LTS ([docs](https://github.com/nodesource/distributions/blob/master/README.md))

1. Update repository

```
sudo apt-get update
```

1. Add nodesource repository

```
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```

2. Install nodejs

```
sudo apt-get install -y nodejs
```

### Jenkins ([docs](https://www.jenkins.io/doc/book/installing/linux/))

1. Add Jenkins repository

```
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
/usr/share/keyrings/jenkins-keyring.asc > /dev/null
```

```
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null
```

2. Check for updates

```
sudo apt-get update
```

3. Install Java 11

```
sudo apt-get install -y openjdk-11-jdk
```

4. Install Jenkins

```
sudo apt-get install -y jenkins
```

5. Run Jenkins

```
sudo systemctl start jenkins
```

6. Check Jenkins statue

```
systemctl status jenkins.service
```

7. Jenkins port (8080)

```
0.0.0.0:8080
```

8. Password location

```
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

9. Provide Jenkins user with privileges necessary to build react project

```
sudo nano /etc/sudoers

# Jenkins user
jenkins ALL=(ALL) NOPASSWD: /usr/bin/npm install
jenkins ALL=(ALL) NOPASSWD: /usr/bin/npm run build
jenkins ALL=(ALL) NOPASSWD: /usr/bin/rm -rf /var/www/bdai-events
jenkins ALL=(ALL) NOPASSWD: /usr/bin/cp -r /var/lib/jenkins/workspace/bdai-events/build/ /var/www/bdai-events/
```

### Ngnix ()

1. Install ngnix

```
sudo apt install -y nginx

sudo mkdir /var/www/bdai-events

sudo nano /etc/nginx/sites-available/bdai-events

server {
  listen 3000;
  server_name 53.282.5.7;
  root /var/www/bdai-events;
  index index.html;

  access_log /var/log/nginx/bdai-events.log;
  error_log /var/log/nginx/bdai-events.error.log;
  location / {
    try_files $uri /index.html =404;
  }
}

sudo ln -s /etc/nginx/sites-available/bdai-events /etc/nginx/sites-enabled/bdai-events

sudo systemctl start nginx

sudo systemctl status nginx.service
```

### Open port ([docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html))

### [Medium Article](https://medium.com/swlh/setup-a-ci-cd-pipeline-to-automate-react-app-deployment-on-aws-ec2-82bd0c194f77)
