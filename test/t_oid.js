var assert = require('assert');
var rs = require("jsrsasign");
require('../lib/index.js').addon(rs);

var oids = {
    "japaneseMinistoryOfJustice":		"1.2.392.100300",

    // X.509v3 extensions
    "jpcomreg-certificatePolicies":		"1.2.392.100300.1.1.1",
    "jpcomreg-registrar":			"1.2.392.100300.1.1.2",
    "jpcomreg-registeredCorporationInfo":	"1.2.392.100300.1.1.3",

    // Certificate Policy OID
    "jpcomreg-certificatePolicy":		"1.2.392.100300.1.3.2"
};

describe("Japanese Commercial Registory OIDs", function() {
    describe("KJUR.asn1.x509.OID", function() {
	var OID = rs.KJUR.asn1.x509.OID;
	var name2oid = OID.name2oid;
	var equal = assert.equal;

        it('existing sha256', function() {
            equal("2.16.840.1.101.3.4.2.1", name2oid("sha256"));
        });

	for (var name in oids) {
	    it("name2oid " + name,
	       function() {equal(oids[name], OID.name2oid(name));});
	}

	for (var name in oids) {
	    it("oid2name " + name,
	       function() {equal(name, OID.oid2name(oids[name]));});
	}
    });
});
