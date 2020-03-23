var fs = require('fs');
const uuidV4 = require('uuid/v4');

module.exports = {
    getCurrentUser: function (_schema) {
        let currentUser = (_schema.Dev.Users.filter(user => user.UUID == _schema.Dev.CurrentUser) || [])[0] || null;
        return currentUser;
    },
    getCurrentUserEnvironmentVariables: function (_schema) {
        let currentUser = this.getCurrentUser(_schema);
        return (currentUser || {}).EnvironmentVariables;
    },
    getCurrentUserOptions: function (_schema) {
        let EnvironmentVariables = this.getCurrentUserEnvironmentVariables(_schema);
        let allOptions = this.cloneObject(_schema.options);
        allOptions.SolutionFolder = this.addObjectProp(allOptions.SolutionFolder, EnvironmentVariables.SolutionFolder);
        allOptions.SolutionStartupFolder = this.addObjectProp(allOptions.SolutionStartupFolder, EnvironmentVariables.SolutionStartupFolder);
        allOptions.Database.ConnectionString = this.addObjectProp(allOptions.Database.ConnectionString, EnvironmentVariables.ConnectionString);
        allOptions.Database.ConnectionStringLog = this.addObjectProp(allOptions.Database.ConnectionStringLog, EnvironmentVariables.ConnectionStringLog);
        return allOptions;
    },
    getCurrentStartupProject: function (_schema) {
        let options = this.getCurrentUserOptions(_schema);
        var files = fs.readdirSync(options.SolutionStartupFolder, 'utf8');
        return files;
    },
    getCurrentStartupProjectFullPath: function (_schema) {
        let options = this.getCurrentUserOptions(_schema);
        var files = this.getCurrentStartupProject(_schema).map(e => options.SolutionStartupFolder + "\\" + e);
        return files;
    },
    getSolution: function (_schema) {
        let options = this.getCurrentUserOptions(_schema);
        var files = fs.readdirSync(options.SolutionFolder, 'utf8');
        return files;
    },
    getSolutionFullPath: function (_schema) {
        let options = this.getCurrentUserOptions(_schema);
        var files = this.getSolution(_schema).map(e => options.SolutionFolder + "\\" + e);
        return files;
    },
    cloneObject(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    addObjectProp(pval1, pval2) {
        if (pval1 != undefined && pval2 != undefined) {
            return pval2 || pval1;
        }
        return pval1;
    },
    uuidv4() {
        return uuidV4();
    },
    getNewModule(Name) {
        return {
            UUID: this.uuidv4(),
            Name: Name
        };
    },
    getDirectory(aPath, Name, FullPath = true) {
        let bPath = fs.readdirSync(aPath, 'utf8');
        if (Name) {
            bPath = bPath.filter(path => path.toLocaleLowerCase().endsWith(Name.toLocaleLowerCase()));
        }
        if(FullPath){
            bPath = bPath.map(path => aPath+'\\'+path);
        }
        return bPath;
    }
}  

