const items = new Array(10);
const process = data => {};
for (var i = 0; i < 10; i++) {
    process(items[i]);
}
// i is still accessible here
console.log(i);