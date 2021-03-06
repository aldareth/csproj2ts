﻿module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["**/*.ts", "!node_modules/**/*.ts"],
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: false,
                    declaration: true,
                    noImplicitAny: true,
                    suppressImplicitAnyIndexErrors: true
                }
            }
        },
        nodeunit: {
            all: ['tests/*tests.js']
        },
        run: {
          demo: {
            args: ['./demo.js']
          }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-run");
    grunt.registerTask("default", ["ts"]);
    grunt.registerTask("test", ["ts","nodeunit"]);
    grunt.registerTask("demo", ["ts","nodeunit","run"]);
};
