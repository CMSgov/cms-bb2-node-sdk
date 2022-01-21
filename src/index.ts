export interface BB2Config {
  foo: string;
}

export default class BB2 {
  foo: string;
  constructor(config: BB2Config) {
    this.foo = config.foo;
  }
}
