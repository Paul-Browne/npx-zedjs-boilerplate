import wbp from "web-build-process";
await wbp({
    source: "src",
    dist: "public",
    verbose: true,
    sourceMaps: false,
    id: "qwertyuiop",
    cache: false,
    prettify: true
});