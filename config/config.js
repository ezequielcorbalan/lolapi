module.exports = {
  HOST: "aurora-integrations-test.cweau7nxx7ej.us-east-1.rds.amazonaws.com",
  USER: "icomm",
  PASSWORD: "icommpsw",
  DB: "EcommerceIntegration",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  key : "%8e87kvH:A4Sjq*cvq;gT(N\"HGCS/]",
  aws : {
    accessKey : "AKIARVOXYNW4O5KFDHXC" ,
    secretKey : "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"
  },
  dynamo : {
    table : "TestClientIntegration"
  }
};