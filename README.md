# Unexpected Function Call Order in JavaScript

This repository demonstrates a subtle bug related to the order of function calls and input handling in JavaScript. The code appears straightforward but produces an unexpected output due to a mismatch in how functions handle input data types.  The solution provides a better approach and emphasizes the importance of input validation and understanding function interactions.

## Bug Description
The `foo` and `bar` functions are defined, with `foo` adding 10 to its input and `bar` multiplying its input by 10.  When `foo(bar(5))` is called, the expected result is 60 (5 * 10 + 10). However, the actual output is 15 due to how the functions interact. The bug highlights the necessity of input validation and function design that prevents such inconsistencies.

## Solution
The solution addresses the issue by ensuring the proper order of operations and clarifying the purpose of each function. The corrected code now operates predictably and yields the expected output.