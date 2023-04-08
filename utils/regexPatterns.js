const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phoneRegex =
  /^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\([0-9]{3}\) [0-9]{3}[-]{1}[0-9]{4})$/;

module.exports = { emailRegex, phoneRegex };
