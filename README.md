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

`import nrr from 'non-repeating-random';`

Then you can use the function go getnerate the set of numbers you need based on a seed.

`const nsrand = nrr(100, "test");`

This will generate a function that you can iterate through by sending it the index as an argument.

`const fifth = nsrand(5); console.log('fifth', fifth);`

This will get the 5th position of the shuffled set, which should be 92;

### Roadmap

[X] Create base functions
[X] Make random sets seeded
[ ] Make random sets iterable
