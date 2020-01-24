const sitedeploy = require('gulp-bitbucket-site-deploy');
const project = require('./package.json');

sitedeploy({
	username: 'alexlorenzi',
	version: project.version,
	source: './dist',
	host: 'github.com',
	ssh: true,
});
