const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const DEFAULT_PARTITION_KEY = "0";
  const PARTITION_KEY_MAX_LENGTH = 256;
  let partitionKey;

  if (event === undefined) {
    return DEFAULT_PARTITION_KEY;
  }

  if (event.partitionKey) {
    partitionKey = event.partitionKey;

    if (typeof partitionKey !== "string") {
      partitionKey = JSON.stringify(partitionKey);
    }

    if (partitionKey.length > PARTITION_KEY_MAX_LENGTH) {
      partitionKey = crypto
        .createHash("sha3-512")
        .update(partitionKey)
        .digest("hex");
    }
  } else {
    const data = JSON.stringify(event);
    partitionKey = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  return partitionKey;
};
