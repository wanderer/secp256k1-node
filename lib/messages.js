exports.CALLBACK_TYPE_INVALID = 'callback should be a function'
exports.COMPRESSED_TYPE_INVALID = 'compressed should be a boolean'

exports.MSG32_TYPE_INVALID = 'message should be a Buffer'
exports.MSG32_LENGTH_INVALID = 'message length is invalid'

exports.TWEAK_TYPE_INVALID = 'tweak should be a Buffer'
exports.TWEAK_LENGTH_INVALID = 'tweak length is invalid'

exports.EC_PRIVKEY_TYPE_INVALID = 'secret key should be a Buffer'
exports.EC_PRIVKEY_LENGTH_INVALID = 'secret key length is invalid'
exports.EC_PRIVKEY_TWEAK_ADD_FAIL = 'tweak out of range or resulting secret key is invalid'
exports.EC_PRIVKEY_TWEAK_MUL_FAIL = 'tweak out of range'

exports.EC_PUBKEYS_TYPE_INVALID = 'public keys should be an Array'
exports.EC_PUBKEYS_LENGTH_INVALID = 'public keys Array should have at least 1 element'
exports.EC_PUBKEY_TYPE_INVALID = 'public key should be a Buffer'
exports.EC_PUBKEY_LENGTH_INVALID = 'public key length is invalid'
exports.EC_PUBKEY_PARSE_FAIL = 'the public key could not be parsed or is invalid'
exports.EC_PUBKEY_CREATE_FAIL = 'secret was invalid, try again'
exports.EC_PUBKEY_TWEAK_ADD_FAIL = 'tweak out of range or resulting public key is invalid'
exports.EC_PUBKEY_TWEAK_MUL_FAIL = 'tweak out of range'
exports.EC_PUBKEY_COMBINE_FAIL = 'the sum of the public keys is not valid'

exports.ECDSA_SIGNATURE_TYPE_INVALID = 'signature should be a Buffer'
exports.ECDSA_SIGNATURE_LENGTH_INVALID = 'signature length is invalid'
exports.ECDSA_SIGNATURE_RECOVERY_ID_TYPE_INVALID = 'recovery should be a Number'
exports.ECDSA_SIGNATURE_RECOVERY_ID_VALUE_INVALID = 'recovery should have value between -1 and 4'
exports.ECDSA_SIGNATURE_PARSE_FAIL = 'couldn\'t parse signature'
exports.ECDSA_SIGNATURE_PARSE_DER_FAIL = 'couldn\'t parse DER signature'
exports.ECDSA_SIGNATURE_SERIALIZE_DER_FAIL = 'couldn\'t serialize signature to DER format'
exports.ECDSA_SIGNATURE_NORMALIZE_FAIL = 'couldn\'t normalize signature'

exports.ECDSA_SIGN_FAIL = 'nonce generation function failed or private key is invalid'
exports.ECDSA_VERIFY_FAIL = 'incorrect or unparseable signature'
exports.ECDSA_RECOVER_FAIL = 'couldn\'t recover public key from signature'

exports.ECDH_FAIL = 'scalar was invalid (zero or overflow)'