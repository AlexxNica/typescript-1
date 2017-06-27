import { KubeConfig, Config } from './config';
import { expect } from 'chai';

const kcFileName = "testdata/kubeconfig.yaml";

describe("Config", () => {
});


describe("KubeConfig", () => {
    describe("loadFromFile", () => {
        it("should load the kubeconfig file properly", () => {
            let kc = new KubeConfig();
            kc.loadFromFile(kcFileName);

            // check clusters
            expect(kc.clusters.length).to.equal(2);
            let cluster1 = kc.clusters[0];
            let cluster2 = kc.clusters[1];
            expect(cluster1.name).to.equal("cluster1");
            expect(cluster1.caData).to.equal("CADATA");
            expect(cluster1.server).to.equal("http://example.com");
            expect(cluster2.name).to.equal("cluster2");
            expect(cluster2.caData).to.equal("CADATA");
            expect(cluster2.server).to.equal("http://example.com");

            // check users
            expect(kc.users.length).to.equal(2);
            let user1 = kc.users[0];
            let user2 = kc.users[1];
            expect(user1.name).to.equal("user1");
            expect(user1.certData).to.equal("CADATA");
            expect(user1.keyData).to.equal("CKDATA");
            expect(user2.name).to.equal("user2");
            expect(user2.certData).to.equal("CADATA");
            expect(user2.keyData).to.equal("CKDATA");

            // check contexts
            expect(kc.contexts.length).to.equal(2);
            let context1 = kc.contexts[0];
            let context2 = kc.contexts[1];
            expect(context1.name).to.equal("context1");
            expect(context1.user).to.equal("user1");
            expect(context1.cluster).to.equal("cluster1");
            expect(context2.name).to.equal("context2");
            expect(context2.user).to.equal("user2");
            expect(context2.cluster).to.equal("cluster2")
        });
        it("should fail to load a missing kubeconfig file", () => {
            // TODO: make the error check work
            // let kc = new KubeConfig();
            // expect(kc.loadFromFile("missing.yaml")).to.throw();
        });
    });
});
