'use strict';

class ServerlessLogKeep {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;
        this.serverless.cli.log('Hello from Serverless!');
        console.log(JSON.stringify(Object.keys(this.serverless)));
        console.log(JSON.stringify(this.options));
        // this.commands = {
        //     deploy: {
        //         lifecycleEvents: ['resources', 'functions'],
        //     },
        // };

        this.hooks = {
            // 'before:deploy:resources': this.beforeDeployResources,
            // 'before:deploy:functions': this.beforeDeployFunctions,
            // 'deploy:resources': this.deployResources,
            // 'after:deploy:functions': this.afterDeployFunctions,
            'before:package:finalize': this.createRolesPerFunction.bind(this),
            'after:package:finalize': this.appendCF.bind(this),

        };
    }


    // createRolesPerFunction() {
    //     console.log('create cfn');
    //     console.log('create cfn');
    //
    // }

    createRolesPerFunction() {
        console.log('create cfn');
        console.log('create cfn');

    }

 appendCF() {
        console.log('create cfn');
        console.log('create cfn');
    }

    beforeDeployResources() {
        console.log('Before Deploy Resources');
    }

    beforeDeployFunctions() {
        console.log('Before Deploy Functions');
    }

    deployResources() {
        console.log('Deploy Resources');
    }

    afterDeployFunctions() {
        console.log('After Deploy Functions');
    }


    checkStage() {
        let stage = this.options.stage ? this.options.stage : this.serverless.service.provider.stage

        if (!this.serverless.service.custom.stages || !Array.isArray(this.serverless.service.custom.stages)) {
            throw new Error(`A "stages" array must be defined in your serverless.yml's "custom" section.`)
        } else {
            if (this.serverless.service.custom.stages.indexOf(stage) === -1) {
                throw new Error(`'${stage}' is not a valid deployment stage. Add it to your serverless.yml's "custom.stages" section.`)
            }
        }
    } // end checkStage

} // end class

module.exports = ServerlessLogKeep;
