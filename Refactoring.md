# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Start by adding some blank lines in between code blocks. 

Refactoring =>     
    TRIVIAL_PARTITION_KEY is the default value of the partition key in the event it is not provided as a param, so TRIVIAL_PARTITION_KEY => DEFAULT_PARTITION_KEY
    
    MAX_PARTITION_KEY_LENGTH is the max length of the partition key, which indicates partition key is the name of the variable we want to describe while the 'max length' is the property value, so MAX_PARTITION_KEY_LENGTH => PARTITION_KEY_MAX_LENGTH. This way if needed, we can also provide min length to the partition key by using PARTITION_KEY_MIN_LENGTH.         
    
    Since the value of the candidate is the partitionKey, so candidate => partitionKey     
    
Since the function returns TRIVIAL_PARTITION_KEY when the event is not provided ( undefined ), we can move it to the top of the function. Then we can remove the event not undefined condition because the code won't reach this point if the event is undefined. Then we can remove the condition for partitionKey because a value is definitely assigned to the variable. Now the only possibility for the partition key to not be a string is when the partition key value is provided via event param. So we can move it inside to the partition key checking condition block. Also, the length check is needed only when the partition key is provided. So we can move that block in to the same param check block.
