const OIDs = {
    "japaneseMinistoryOfJustice":		"1.2.392.100300",

    // X.509v3 extensions
    "jpcomreg-certificatePolicies":		"1.2.392.100300.1.1.1",
    "jpcomreg-registrar":			"1.2.392.100300.1.1.2",
    "jpcomreg-registeredCorporationInfo":	"1.2.392.100300.1.1.3",

    // Certificate Policy OID
    "jpcomreg-certificatePolicy":		"1.2.392.100300.1.3.4"
};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(OIDs);
}

exports.addon = addon;
exports.OIDs = OIDs;

