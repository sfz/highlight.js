# sfz language grammar for highlight.js

[![LicenseBadge]][BSD-2-Clause]

## Usage

Simply load the module after loading `highlight.js`.
You'll use the minified version found in the `dist` directory.
This module is just a CDN build of the language, so it will register itself
as the Javascript is loaded.

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/sfz.min.js"></script>
<script type="text/javascript">
  hljs.highlightAll();
</script>
```

## License

sfz language grammar for highlight.js is released under the [BSD-2-Clause] License.
See [LICENSE] file for details.

## Links

- The official site for the highlight.js library is <https://highlightjs.org/>.
- The highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about sfz: <https://sfzformat.com>


[LICENSE]:      LICENSE
[LicenseBadge]: https://badgen.net/badge/license/BSD-2-Clause/black
[BSD-2-Clause]: https://spdx.org/licenses/BSD-2-Clause.html
