/**
 * este é um projeto de bliblioteca como o objetivo de tornar mais fácil utiliza expressões regulares
 */
class RegexScript {
  constructor() {
    this.pattern = "";
  }

  start() {
    this.pattern += "^";
    return this;
  }

  end() {
    this.pattern += "$";
    return this;
  }

  word() {
    this.pattern += "\\w+";
    return this;
  }

  digit() {
    this.pattern += "\\d";
    return this;
  }

  digits(n) {
    this.pattern += `\\d{${n}}`;
    return this;
  }

  number() {
    this.pattern += "\\d+(\\.\\d+)?";
    return this;
  }

  space() {
    this.pattern += "\\s";
    return this;
  }

  letter() {
    this.pattern += "[a-zA-Z]";
    return this;
  }

  uppercase() {
    this.pattern += "[A-Z]";
    return this;
  }

  lowercase() {
    this.pattern += "[a-z]";
    return this;
  }

  anys() {
    this.pattern += ".";
    return this;
  }

  text() {
    this.pattern += "[a-zA-Z0-9]+";
    return this;
  }

  zeroOrMore() {
    this.pattern += "*";
    return this;
  }
  oneOrMore() {
    this.pattern += "+";
    return this;
  }
  optional() {
    this.pattern += "?";
    return this;
  }
  repeat(n) {
    this.pattern += `{${n}}`;
    return this;
  }
  range(min, max) {
    this.pattern += `{${min}, ${max}} `;
    return this;
  }

  group() {
    this.pattern += "(...)";
    return this;
  }
  or() {
    this.pattern += "|";
    return this;
  }
  capture() {
    this.pattern += "(...)";
    return this;
  }
  namedGroup() {
    this.pattern += "(?<name>...)";
    return this;
  }
  exact(text) {
    this.pattern += `${text}`;
    return this;
  }
  not(text) {
    this.pattern += `(?!${text})`;
    return this;
  }
  startsWith(text) {
    this.pattern += `^${text}`;
    return this;
  }
  endsWith(text) {
    this.pattern += `${text}$`;
    return this;
  }
  email() {
    this.pattern += "([a-z0-9]+[_a-z0-9\\.-]*[a-z0-9]+)@([a-z0-9-]+(?:\\.[a-z0-9-]+)*\\.[a-z]{2,4})";
    return this;
  }
  phone() {
    this.pattern += "?\d{2}?\s\d{4,5}-\d{4}";
    return this;
  }
  url() {
    this.pattern += "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\?=.-]*)\\/?$";
    return this;
  }
  ip() {
    this.pattern += "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}";
    return this;
  }

  space() {
    this.pattern += "\\s";
    return this;
  }


  number() {
    this.pattern += "\\d+";
    return this;
  }

  build() {
    return new RegExp(this.pattern);
  }
}