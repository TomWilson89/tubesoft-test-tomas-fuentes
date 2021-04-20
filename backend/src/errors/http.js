const Mustache = require("mustache");
const en = require("../../locales/en.json");
const es = require("../../locales/es.json");

class HttpError extends Error {
  constructor(name = "Internal Server", status = 500, params = {}) {
    super(name);

    this.name = name;
    this.status = status;
    this.message = {
      en: Mustache.render(en.errors[this.name] || "", params) || undefined,
      es: Mustache.render(es.errors[this.name] || "", params) || undefined,
    };
    this.params = params;
  }
}

module.exports = HttpError;
