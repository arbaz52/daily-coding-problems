# 15th May

Daily Coding Problem

## Problem

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.

## Solution

The solution I have found is from a [stackoverflow solution](https://stackoverflow.com/a/63700320/10915525) which is a tree based approach. A node contains a subset of the given string which each charcode separated by a comma, `Node.traverse()` function returns a list of all the leaves of a tree with the current node as the head of the tree. We use the leaves as the solution decoded messages/strings as they contain the string and not the subset of it.