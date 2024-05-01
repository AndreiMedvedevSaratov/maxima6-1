let user = {
  name: "string",
  age: "number",
  isAdmin: "boolean",
};

for (let key in user) {
  console.log(key);
}

for (let key of Object.entries(user)) {
  console.log(key);
}
