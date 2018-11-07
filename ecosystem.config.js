module.exports = {
  apps: [{
    name: 'rwt-website',
    script: 'npm',
    args: 'start'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ubuntu@ec2-18-208-165-207.compute-1.amazonaws.com',
      key: '~/.ssh/RWT.pem',
      ref: 'origin/master',
      repo: 'git@github.com:rockwiththis/rockwiththis-website.git',
      path: '/home/ubuntu/rockwiththis-website',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
