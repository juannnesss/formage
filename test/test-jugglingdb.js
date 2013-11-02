//'use strict';
//describe.skip("high level REST requests on JugglingDB", function () {
//    before(function (done) {
//        _.each(require.cache, function (mod, modName) {
//            if (~modName.indexOf('formage') || ~modName.indexOf('mongoose') || ~modName.indexOf('jugglingdb'))
//                delete require.cache[modName];
//        });
//        var formage = require('../index');
//        var Schema = require("jugglingdb").Schema;
//        var schema = new Schema("mssql", {host: "(LocalDB)\\v11.0", database: "maskar"});
//        schema.on("connected", function () {
//            var express = require('express');
//            var app = express();
//            formage.init(app, express, {AppliesTo: AppliesTo}, {
//                title: 'Formage Example',
//                default_section: 'Main',
//                admin_users_gui: true,
//                db_layer_type: 'jugglingdb'
//            });
//            var AppliesTo = schema.define("AppliesTo", {
//                AppliesToID: {type: Number, primaryKey: true},
//                Title: {type: String, limit: 100},
//                Identifier: {type: String, limit: 100},
//                Editable: {type: Number}
//            });
//            AppliesTo.validatesPresenceOf('Title');
//            //noinspection JSUnresolvedVariable
//            mock_req_proto.app = module.admin_app = app.admin_app;
//            done()
//        });
//    });
//
//    describe.skip("pages", function () {
//        it.skip("Mock test document page", function (done) {
//            var mock_req = _.defaults({
//                url: "/model/AppliesTo/document/new",
//                method: "GET"
//            }, mock_req_proto);
//            var mock_res = _.defaults({ req: mock_req }, mock_res_proto);
//
//            mock_res.render = function (view, options) {
//                view.should.equal("document.jade");
//                should.exist(options);
//                done()
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//
//
//        it.skip("test document - post simple", function (done) {
//            var mock_req = _.defaults({
//                url: "/model/AppliesTo/document/new",
//                method: "POST",
//                body: {
//                    Title: "gaga5",
//                    Identifier: "asdf",
//                    Editable: "1"
//                },
//                path: ""
//            }, mock_req_proto);
//            var mock_res = _.defaults({ req: mock_req }, mock_res_proto);
//
//            mock_res.redirect = function (path) {
//                should.not.exist(mock_res._status);
//                Number(1).should.equal(arguments.length);
//                done();
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//
//
//        it.skip("test document - post - failing validation", function (done) {
//            var mock_req = _.defaults({
//                url: "/model/AppliesTo/document/new",
//                method: "POST",
//                body: {
//                    Identifier: "asdf",
//                    Editable: "1"
//                },
//                path: ""
//            }, mock_req_proto);
//            var mock_res = _.defaults({ req: mock_req }, mock_res_proto);
//
//            mock_res.render = function (view, options) {
//                view.should.equal("document.jade");
//                should.exist(options.errors.Title);
//                Number(422).should.equal(mock_res._status);
//                done();
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//
//
//        it.skip("test document - post progressive", function (done) {
//            var mock_req = _.defaults({
//                url: "/json/model/AppliesTo/document/new",
//                method: "POST",
//                body: {
//                    string_req: "gaga",
//                    enum: "",
//                    "object.object.object.nested_string_req" : "gigi"
//                },
//                path: ""
//            }, mock_req_proto);
//            var mock_res = _.defaults({ req: mock_req }, mock_res_proto);
//
//            mock_res.json = function (status, data) {
//                status.should.equal(205);
//                data.label.should.equal(mock_req.body.string_req);
//                done();
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//
//
//        it.skip("Mock test model page", function (done) {
//            var mock_req = _.defaults({
//                url: "/model/AppliesTo/",
//                query: {start: "2"},
//                method: "GET"
//            }, mock_req_proto);
//            var mock_res = _.defaults({ req: mock_req }, mock_res_proto);
//
//            mock_res.render = function (view, options) {
//                view.should.equal("model.jade");
//                should.exist(options);
//                this.req.app.render(view, options, function (err, doc) {
//                    should.exist(doc);
//                    done(err);
//                });
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//
//
//        it.skip("Mock test models page", function (done) {
//            var mock_req = _.defaults({
//                url: "/",
//                method: "GET"
//            }, mock_req_proto);
//            var mock_res = _.defaults({ req: mock_req }, mock_res_proto);
//
//            mock_res.render = function (view, options) {
//                view.should.equal("models.jade");
//                should.exist(options);
//                this.req.app.render(view, options, function (err, doc) {
//                    should.exist(doc);
//                    done(err);
//                });
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//
//
//        it.skip("Mock test admin user page post", function (done) {
//            var mock_req = _.defaults({
//                url: "/model/Admin_Users/document/new",
//                body: {username: "admin" + Math.random()},
//                method: "POST",
//                path: ""
//            }, mock_req_proto);
//
//            var mock_res = _.defaults({
//                req: mock_req
//            }, mock_res_proto);
//
//            mock_res.redirect = function (p) {
//                should.exist(p);
//                done();
//            };
//
//            module.admin_app.handle(mock_req, mock_res);
//        });
//    });
//
//
//    after(function (done) {
//        _.each(require.cache, function (mod, modName) {
//            if (~modName.indexOf('formage'))
//                delete require.cache[modName];
//        });
//        done();
//    });
//});
