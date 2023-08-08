function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function iconAlt(name) {
  // Replace all spaces with underscores
  let text = name.replace("-", " ");

  // Split the text into an array of words
  let words = text.split(" ");

  // Filter words
  let keywords = ["icon", "alt"];
  words = words.filter(word => !keywords.includes(word));

  // For each word, capitalize the first letter
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a string
  return words.join(" ");
}

export { classNames, iconAlt };
