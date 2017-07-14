import Brett from './Brett';

class Startup {
  public static main(): number {
    console.log("Hello WOrld!");
    return 0;
  }

  public static getName(): string {
    return Brett.sayName();
  }
}

Startup.main();
Startup.getName();