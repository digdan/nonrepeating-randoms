const prng_seed = (str) => {
  for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
};

const sfc32 = (a, b, c, d) => {
  a >>>= 0;
  b >>>= 0;
  c >>>= 0;
  d >>>= 0;
  var t = (a + b) | 0;
  a = b ^ (b >>> 9);
  b = (c + (c << 3)) | 0;
  c = (c << 21) | (c >>> 11);
  d = (d + 1) | 0;
  t = (t + d) | 0;
  c = (c + t) | 0;
  return (t >>> 0) / 4294967296;
};

function* pr_sequence(rmin, rmax, seedString = null) {
  if (seedString === null) {
    seedString = Math.random().toString();
  }
  const diff = rmax - rmin;
  const seed = prng_seed(seedString);
  if (diff < 4) {
    throw "Range must be larger than 4";
  }

  const modu = 2 ** diff.toString(2).length;
  const a =
    Math.round(sfc32(seed(), seed(), seed(), seed()) * (modu >> 2) - 1) * 4 + 1;
  const c =
    Math.round(sfc32(seed(), seed(), seed(), seed()) * modu) - 3 + 3 || 1;
  const offset = rmin;
  const seqlength = diff + 1;

  let x = 1;
  for (let i = 0; i < seqlength; i++) {
    while (true) {
      x = (x * a + c) % modu;
      if (x < seqlength) {
        yield x + offset;
        break;
      }
    }
  }
}

const pr_sequence_array = (rmin, rmax, seedString = null) => {
  return Array.from(pr_sequence(rmin, rmax, seedString));
};

export { pr_sequence, pr_sequence_array };
