<a name="readme-top"></a>

<!-- ABOUT THE PROJECT -->

## About The Project

Non-repeating random is a javascript-function that creates a set of numbers that can be iterated without repeating the same number in the set.

Here's why:

- You may wish to iterate a set of data without being detected ( data scraping ).
- You may want to gather a reproducable and non-sequential sample from a dataset.
- You may want to shuffle a dataste for a gaming mechanic

Of course, you may have your own reasons and needs to generate a non-sequential unique set of numbers. Shoot me an email if you find a new use for this library. started.

<!-- GETTING STARTED -->

## Getting Started

To use this library you can import it as a generic function.

`import { pr_sequence, pr_sequence_array } from 'non-repeating-random';`
`const nsArray = pr_sequence_array(1, 100, "test");`

This will generate an array that has the psuedo random sequence pre-built.

`const seq = pr_sequence(1, 100, "test");`

This will create an iteratable object. Each iteration will generate a non-sequencial non-repeating number.

### Roadmap

- [x] Create base functions
- [x] Make random sets seeded
- [x] Make random sets iterable
- [x] Use purely mathmatical solution
- [ ] Finish roadmap
