import { Main } from "./imports/server-main/main";
import { Meteor } from 'meteor/meteor';
import './imports/publications/images';

Meteor.startup(function () {
    // Load future from fibers
    var Future = Npm.require("fibers/future");
    // Load exec
    var exec = Npm.require("child_process").exec;

    // Server methods
    Meteor.methods({
/*
        runCode: function (x, y) {
            // This method call won't return immediately, it will wait for the
            // asynchronous code to finish, so we call unblock to allow this client
            // to queue other method calls (see Meteor docs)
            this.unblock();
            var future=new Future();
            var command='/Library/Frameworks/R.framework/Resources/bin/Rscript\  /Users/air/PhpstormProjects/spectro/server/my_rscript.R\ 10';
            exec(command,function(error,stdout,stderr){
                if(error){
                    console.log(error);
                    throw new Meteor.Error(500,command+" failed");
                }
                future.return(stdout.toString());
            });
            return future.wait();
        },
        */


    });
});

