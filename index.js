var mkdirp = require('mkdirp');

var repoPath = '/path/to/repo';
mkdirp.sync(repoPath);

const simpleGit = require('simple-git');
simpleGit().clean(simpleGit.CleanOptions.FORCE);

const jsonfile = require('jsonfile');
const moment = require('moment');
const simpeGit = require('simpe-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(1,'d').format();

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data);


simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE});