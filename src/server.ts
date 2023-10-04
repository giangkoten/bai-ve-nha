// Đối tượng User => Chỉ là khuôn mẫu
class User {
  // Khai báo các property(thuộc tính của đối tượng)
  // Từ khóa this dùng để trỏ đến đối tượng mà nó đang dùng
  userId: number;
  userName: string;
  age?: number;
  address?: string;
  // Hàm tạo đối tượng
  constructor(userId: number, userName: string, age: number, address: string) {
    // Gán lại giá trị cho các thuộc tính của đối tượng user
    this.userId = userId;
    this.userName = userName;
    this.age = age;
    this.address = address;
  }
  getName(): string {
    return this.userName;
  }
}
//Khởi tạo đối tượng => sử dụng từ khóa new
const giang = new User(1, "giangggz", 23, "HN");
// console.log(giang.getName());

// Thiết kế một đối tượng Product gồm các trường : id, name , price , from và khởi tạo đối tượng đó
class Product {
  id: number;
  name: string;
  price: number;
  from: string;

  constructor(id: number, name: string, price: number, from: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.from = from;
  }
}
const car = new Product(1, "Toyota", 10000, "HCM");
// console.log(car);

class Circle {
  banKinh: number;
  color: string;
  constructor(bankinh: number, color: string) {
    this.banKinh = bankinh;
    this.color = color;
  }
  perimeter(): number {
    return this.banKinh * 2 * 3.14;
  }
  acreage(): number {
    return this.banKinh ** this.banKinh * 3.14;
  }
}
const vongTron = new Circle(10, "red");

// /-------------------\
class Person {
  id: number;
  name: string;
  age: number;
  address: string;
  constructor(
    personId: number,
    personName: string,
    personAge: number,
    personAddress: string
  ) {
    this.id = personId;
    this.name = personName;
    this.address = personAddress;
    this.age = personAge;
  }
  run(): string {
    return "running....";
  }
}

class Student extends Person {
  clasName: string;
  score: number;
  constructor(
    className: string,
    score: number,
    personName: string,
    personAge: number,
    personAddress: string,
    personId: number
  ) {
    super(personId, personAddress, personAge, personName);
    this.clasName = className;
    this.score = score;
  }
  learn(): string {
    return "learning...";
  }
}
class Employee extends Person {
  department: string;
  salary: number;

  constructor(
    personId: number,
    personName: string,
    age: number,
    address: string,
    department: string,
    salary: number
  ) {
    super(personId, personName, age, address);
    this.department = department;
    this.salary = salary;
  }
}
const studnet1 = new Student("TS", 10, "giang", 23, "HN", 1);
const employee = new Employee(1, "giang", 23, "HN", "coder", 10000000);

// Bai 2
class QuadraticEquation {
  private heSoA: number;
  private heSoB: number;
  private heSoC: number;

  constructor(heSoA: number, heSoB: number, heSoC: number) {
    this.heSoA = heSoA;
    this.heSoB = heSoB;
    this.heSoC = heSoC;
  }
  getA(): number {
    return this.heSoA;
  }
  setA(value: number) {
    this.heSoA = value;
  }
  getB(): number {
    return this.heSoB;
  }
  setB(value: number) {
    this.heSoB = value;
  }
  getC(): number {
    return this.heSoC;
  }
  setC(value: number) {
    this.heSoC = value;
  }
  getDiscriminant(): number {
    return this.heSoB * this.heSoB - 4 * this.heSoA * this.heSoC;
  }
  getRoot1(): unknown {
    const delta = this.getDiscriminant();
    if (delta > 0) {
      return (
        (-this.heSoB + Math.sqrt(delta)) / (2 * this.heSoA) &&
        (-this.heSoB - Math.sqrt(delta)) / (2 * this.heSoA)
      );
    } else if (delta < 0) {
      return "Pt vo nghiem";
    } else if (delta == 0) {
      return -this.heSoB / (2 * this.heSoA);
    }
  }
}
const test1 = new QuadraticEquation(1, 2, 1);
// console.log(test1.getRoot1());

// Bai 3
class Fan {
  SLOW = 1;
  MEDIUM = 2;
  FAST = 3;
  speed: number;

  private on: boolean;
  private radius: number;
  private color: string;

  constructor(speed: number, on: boolean, radius: number, color: string) {
    this.speed = speed;
    this.on = on;
    this.radius = radius;
    this.color = color;
  }
  getOn(): boolean {
    return this.on;
  }
  setOn(value: boolean) {
    this.on = value;
  }
  getRadius(): number {
    return this.radius;
  }
  setRadius(value: number) {
    this.radius = value;
  }
  getColor(): string {
    return this.color;
  }
  setColor(value: string) {
    this.color = value;
  }
  ToString(): string {
    if (this.on === true) {
      return `${this.speed}, ${this.color}, ${this.radius}, fan is on`;
    } else {
      return `${this.color}, ${this.radius}, fan is off`;
    }
  }
}

const testFan = new Fan(3, true, 10, "red");
// console.log(testFan.ToString());
const fan1 = new Fan(testFan.FAST, true, 10, "yellow");
fan1.setOn(true);
fan1.speed = 3;
fan1.setColor("yellow");
fan1.setRadius(10);
