const DEFAULT_PROTECTION = 10;

class Shield {
    constructor(name, protection) {
        this.name = name;
        this.protection = DEFAULT_PROTECTION;
    }
}

module.exports = Shield;