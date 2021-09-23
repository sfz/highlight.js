# sfz language grammar for highlight.js

[![CC0 Badge]][CC0-1.0]

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

## Build

This language grammar uses a pair of functions from a regex library which
that is not currently part of the highlight.js exposed API. This means that
in order to build it from sources you need to copy or `git clone` this directory
as `extra/sfz/` in the highlight.js source tree, NOT using symlinks, then build
as usual as described in the `/extra/3RD_PARTY_QUICK_START.md` guide.

## License

sfz language grammar for highlight.js is released under the [CC0-1.0] License.
See [LICENSE] file for details.

## Links

- The official site for the highlight.js library is <https://highlightjs.org/>.
- The highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about sfz: <https://sfzformat.com>


[LICENSE]:   LICENSE
[CC0 Badge]: https://badgen.net/badge/license/CC0/orange
[CC0-1.0]:   https://creativecommons.org/publicdomain/zero/1.0/
