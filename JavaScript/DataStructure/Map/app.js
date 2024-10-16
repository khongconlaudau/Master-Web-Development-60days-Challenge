const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

console.log(map.get("a"));
console.log(map.keys());
console.log(map.values());
console.log(map.size);
console.log(map.delete("b"));

console.log(map.size);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

console.log(map)


arr2 = [1, 2, 3, 4, 5, 1];
for (let i in arr2) {
    console.log(i);
}




