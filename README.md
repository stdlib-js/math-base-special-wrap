<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# wrap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Wrap a value on the half-open interval `[min,max)`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import wrap from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-wrap@deno/mod.js';
```

#### wrap( v, min, max )

Wraps a value on the half-open interval `[min,max)`.

```javascript
var v = wrap( 3.14, 0.0, 5.0 );
// returns 3.14

v = wrap( -3.14, 0.0, 5.0 );
// returns ~1.86

v = wrap( 10.0, 0.0, 5.0 );
// returns 0.0

v = wrap( -0.0, 0.0, 5.0 );
// returns 0.0

v = wrap( 0.0, -3.14, -0.0 );
// returns -3.14
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var v = wrap( NaN, 0.0, 5.0 );
// returns NaN

v = wrap( 0.0, NaN, 5.0 );
// returns NaN

v = wrap( 3.14, 0.0, NaN );
// returns NaN
```

If provided `min == max`, the function returns `NaN`.

```javascript
var v = wrap( 3.14, 3.0, 3.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** distinguish between positive and negative zero. Where appropriate, the function returns positive zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import wrap from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-wrap@deno/mod.js';

var min;
var max;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    min = discreteUniform( 0.0, 10.0 );
    max = discreteUniform( 5.0, 15.0 );
    v = discreteUniform( -20.0, 20.0 );
    console.log( 'wrap(%d,%d,%d) => %d', v, min, max, wrap( v, min, max ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/clamp`][@stdlib/math/base/special/clamp]</span><span class="delimiter">: </span><span class="description">restrict a double-precision floating-point number to a specified range.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-wrap.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-wrap

[test-image]: https://github.com/stdlib-js/math-base-special-wrap/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-wrap/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-wrap/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-wrap?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-wrap.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-wrap/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-wrap/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-wrap/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-wrap/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-wrap/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-wrap/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/clamp]: https://github.com/stdlib-js/math-base-special-clamp/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
