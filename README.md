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
sudo apt-get install -y openjdk-11-jre
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

7. Password location

```
/var/lib/jenkins/secrets/initialAdminPassword
```

### Open port ([docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/authorizing-access-to-an-instance.html))
