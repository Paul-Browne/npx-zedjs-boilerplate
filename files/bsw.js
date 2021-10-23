import wbp from "web-build-process";
await wbp({
    source: "src",
    dist: "public",
    verbose: true,
    id: "qwertyuiop",
    sourceMaps: false
});