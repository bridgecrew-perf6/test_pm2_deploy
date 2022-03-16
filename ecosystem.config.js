module.exports = {
  apps : [{
    script: 'main.js',
  }],
   
  // Deployment Configuration
  deploy : {
    production : {
       "user" : "node",
       "host" : "127.0.0.1",
       "ref"  : "origin/master",
       "repo" : "git@github.com:nyossa/test_pm2_deploy.git",
       "path" : "/Users/yoshizawanaoaki/python_test/workspace/aibod/dev/test_pm2_deploy",
       "post-deploy" : "pm2 start main.js"
    }
  }
};