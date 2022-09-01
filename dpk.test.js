const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the provided partition key when given partition key", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        "07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0",
    });
    expect(trivialKey).toBe(
      "07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0"
    );
  });
  
  it("Returns hash value lengthing less than or equal to max length on custom input without partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      some: "sada",
      other: "owwww"
    });
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });
  
  it("Returns hash value lengthing less than or equal to max length when partitionKey length is greater than max length", () => {
    const trivialKey = deterministicPartitionKey({
      some: "sada",
      other: "owwww",
      partitionKey:
        "07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf",
    });
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });

  it("Returns the provided partition key is not string returns it after stringifying", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        some: "sada",
        other: "owwww"
      },
    });
    expect(typeof trivialKey).toBe('string');
  });
  
  it("Returns the provided non string partition key exceeds the max length returns hash lengthing less than or equal to max length", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: {
        some: "07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf",
        other:
          "07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf07342ab7fb263aa24c626a60696433cd7b8eee680a76ee708e58a4d79ed35180c45e0e914ca67977f9eebd4b4c4b2435cc0a4db3622d95c90c2328ab386b1eaf",
      },
    });
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });
});
