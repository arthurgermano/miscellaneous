module.exports = {
  auth: {
    webAuthn: require("./src/auth/webauthn/index.js"),
  },
  constants: require("./src/constants.js"),
  crypto: require("./src/crypto/index.js"),
  custom: {
    db: {
      sequelize: {
        setConditionBetweenDates: require("./src/custom/db/sequelize/setConditionsBetweenDates.js"),
        setConditionBetweenValues: require("./src/custom/db/sequelize/setConditionsBetweenValues.js"),
        setConditionStringLike: require("./src/custom/db/sequelize/setConditionStringLike.js"),
      },
    },
    waitPlugin: require("./src/custom/waitPlugin"),
  },
  helpers: {
    dateCompareAsc: require("./src/helpers/dateCompareAsc.js"),
    dateCompareDesc: require("./src/helpers/dateCompareDesc.js"),
    defaultValue: require("./src/helpers/defaultValue.js"),
    isInstanceOf: require("./src/helpers/isInstanceOf.js"),
    isNumber: require("./src/helpers/isNumber.js"),
    isObject: require("./src/helpers/isObject.js"),
  },
  utils: {
    assign: require("./src/utils/assign.js"),
    base64From: require("./src/utils/base64From.js"),
    base64FromBuffer: require("./src/utils/base64FromBuffer.js"),
    base64To: require("./src/utils/base64To.js"),
    base64ToBuffer: require("./src/utils/base64ToBuffer.js"),
    base64URLEncode: require("./src/utils/base64URLEncode.js"),
    bufferCompare: require("./src/utils/bufferCompare.js"),
    bufferConcatenate: require("./src/utils/bufferConcatenate.js"),
    bufferFromString: require("./src/utils/bufferFromString.js"),
    bufferToString: require("./src/utils/bufferToString.js"),
    calculateSecondsInTime: require("./src/utils/calculateSecondsInTime.js"),
    currencyBRToFloat: require("./src/utils/currencyBRToFloat"),
    dateToFormat: require("./src/utils/dateToFormat.js"),
    dateFirstHourOfDay: require("./src/utils/dateFirstHourOfDay.js"),
    dateLastHourOfDay: require("./src/utils/dateLastHourOfDay.js"),
    debouncer: require("./src/utils/debouncer.js"),
    deleteKeys: require("./src/utils/deleteKeys.js"),
    generateSimpleId: require("./src/utils/generateSimpleId.js"),
    generateRandomString: require("./src/utils/generateRandomString.js"),
    getExecutionTime: require("./src/utils/getExecutionTime.js"),
    JSONFrom: require("./src/utils/JSONFrom.js"),
    JSONTo: require("./src/utils/JSONTo.js"),
    messageEncryptToChunks: require("./src/utils/messageEncryptToChunks.js"),
    messageDecryptFromChunks: require("./src/utils/messageDecryptFromChunks.js"),
    normalize: require("./src/utils/normalize.js"),
    pushLogMessage: require("./src/utils/pushLogMessage.js"),
    regexDigitsOnly: require("./src/utils/regexDigitsOnly.js"),
    regexReplaceTrim: require("./src/utils/regexReplaceTrim.js"),
    regexLettersOnly: require("./src/utils/regexLettersOnly.js"),
    removeDuplicatedStrings: require("./src/utils/removeDuplicatedStrings.js"),
    split: require("./src/utils/split.js"),
    stringCompress: require("./src/utils/stringCompress.js"),
    stringDecompress: require("./src/utils/stringDecompress.js"),
    stringToDate: require("./src/utils/stringToDate.js"),
    stringToDateToFormat: require("./src/utils/stringToDateToFormat.js"),
    stringToFormat: require("./src/utils/stringToFormat.js"),
    stringZLibCompress: require("./src/utils/stringZLibCompress.js"),
    stringZLibDecompress: require("./src/utils/stringZLibDecompress.js"),
    toString: require("./src/utils/toString.js"),
    uint8ArrayFromString: require("./src/utils/uint8ArrayFromString"),
    uint8ArrayToString: require("./src/utils/uint8ArrayToString"),
  },
  validators: {
    validateCADICMSPR: require("./src/validators/validateCADICMSPR.js"),
    validateCNPJ: require("./src/validators/validateCNPJ.js"),
    validateCPF: require("./src/validators/validateCPF.js"),
    validateEmail: require("./src/validators/validateEmail.js"),
  },
  ...require("./src/custom/db/sequelize"),
  ...require("./src/helpers"),
  ...require("./src/utils"),
  ...require("./src/validators"),
  ...require("./src/auth/webauthn"),
  ...require("./src/crypto"),
  waitPlugin: require("./src/custom/waitPlugin"),
};
