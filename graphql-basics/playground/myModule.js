// Named export - has a name, have as many as needed
// Default export - has no name, you can only have one

const message = "Some message from myModule.js";
const name = "Andrew";
const location = "Philadelphia";
const getGreeting = (name) => {
  return `Welcome to the course ${name}`;
};

export { message, name, getGreeting, location as default };
