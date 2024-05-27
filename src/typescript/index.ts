import { useState } from "react";

// Number
const num1: number = 1;

// String
const str1: string = "string";

// Boolean
const bool1: boolean = true;

// Symbol
const sym1: symbol = Symbol('key');

// Null
const empty: null = null;

// Undefined
const undef: undefined = undefined;

// BigInt
const bigInt1: bigint = 10000000n;

// Void (Не возвращает значение)
const check = (a: number): void => { }

// Never (Никогда не возвращает значение) - нет значения, выбрасывает ошибку или вечный цикл
const throwError = (message: string): never => {
    throw new Error(message);
}

// Unknown (Неизвестно что возвращает, требуется проверка)
const response: unknown = await fetch('');

// Any (Любой тип, не требуется проверка)
const response2: any = await fetch('');

// enum
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
};

enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// Интерфейсы
interface IUser {
    name: string;
    age: number;
}

// Типы и алиасы типов
type Category = string | number;

// Объединение типов:
type ICategory = string | number | null;

// Пересечение типов
type IUserCategory = IUser & { category: Category };

// Запросы типов
const news = {
    author: 'Andrei',
    category: ["all"],
    description: "Typescript",
    id: 1,
    image: null,
    language: "ru",
    published: "yes",
    title: "Typescript",
    url: ""
}

type NewsType = typeof news;

// Литеральные типы (строковые, числовые, булевые)
export type CategoriesType =
    | "all"
    | "javascript"
    | "typescript"
    | "php"
    | "java"
    | "c++"
    | "c#"

// Типизация объектов
// interface DateTimeFormatOptions {
//     weekday?: 'narrow' | 'short' | 'long';
//     year?: 'numeric' | '2-digit';
//     month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
//     day?: 'numeric' | '2-digit';
//     hour?: 'numeric' | '2-digit';
//     minute?: 'numeric' | '2-digit';
//     second?: 'numeric' | '2-digit';
//     hour12?: boolean;
//     timeZone?: string;
//     timeZoneName?: 'short' | 'long';
// }

// export const formatDate = (date: Date): string => {
//     const options: DateTimeFormatOptions = {
//         weekday: 'long',
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//     }

//     return date.toLocaleDateString('en-US', options);
// }

// Intl.DateTimeFormatOptions из библиотеки

export const formatDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return date.toLocaleDateString('en-US', options);
}

// Типизация массивов - методоы массивов работают
interface User {
    users: IUser[]; // [IUser] или Array<IUser>
}

// Типизация кортежа
// если props.value указан, то возьмет из него
const [value, setValue] = useState(props.value);

// или
const [value, setValue] = useState<string>(props.value);

// или
value: [string, number];


// Типизация функций
import { useState, useEffect } from 'react';

function DebounceExample() {
    const [isVisible, setIsVisible] = useState(true); // Начальное состояние видимости

    // Функция для управления видимостью элемента
    function toggleVisibility() {
        setIsVisible((prevVisibility) => {
            // Если элемент виден, установить его невидимым и вернуть false
            if (prevVisibility) {
                return false;
            }
            // Если элемент был невидим, сделать его снова видимым и вернуть true
            else {
                return true;
            }
        });
    }

    useEffect(() => {
        // Эффект будет выполнен только один раз, когда компонент первый раз обновится
        if (!isVisible) {
            // Установить таймаут для плавного исчезновения
            setTimeout(() => {
                toggleVisibility(); // После таймаута снова изменить видимость
            }, 500); // Время в миллисекундах
        }
    }, [isVisible]); // Зависимость от isVisible

    return (
        <div style= {{ opacity: isVisible ? 1 : 0 }
}>
    {/ * Содержимое элемента * /}
        < button onClick = { toggleVisibility } > Toggle Visibility < /button>
            < /div>
  );
}

export default DebounceExample;

// void - не возвращает значение

// Расширение интерфейсов, для создания новых интерфейсов
interface IUser {
    name: string;
    age: number;
    // [key: string]: string; - для расширения интерфейсов - для динамического добавления - индексные типы
}

interface IAdmin extends IUser {
    isAdmin: boolean;
}

const admin: IAdmin = {
    name: 'John',
    age: 30,
    isAdmin: true,
}

class Admin implements IAdmin { // через запятую можем ещё добавлять интерфейсы
    name: string;
    age: number;
    isAdmin: boolean;

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }

    getName() {
        console.log(this.name);
    }
}

// Классы
class Person {
    public name: string; // доступно везде, по дефолту
    private age: number; // доступно только в классе
    protected address: string; // свойства и методы доступны в классе, где определены, а также в наследниках
    readonly city: string; // могут быть прочитаны, но не могут быть изменены

    constructor(name: string, age: number, address: string, city: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.city = city;
    }

    public getGreeting(): string {
        return `Hello, my name is ${this.name}`;
    }

    private getPrivateData(): string {
        return `This is private data: ${this.age}`;
    }

    protected getProtectedData(): string {
        this.getPrivateData();
        this.age;
        this.city = "London"; // никак не можем переделать
        return `This is protected data: ${this.address}`;
    }
}

const john = new Person('John', 30, '123 street', 'Moscow');

console.log(john.name);
console.log(john.getGreeting());

console.log(john.age);
console.log(getPrivateData());

console.log(john.address);
console.log(john.protectedData);

// Optional, Not-Null, Not-Undefined
export interface User {
    middleName: string | undefined;
    description?: string;
}

const root = ReactDOM.createRoot(document.getElementById("root")!); // обязательно есть
root.render(
    <React.StrictMode>
    <App />
    < /React.StrictMode>
);

// Generics
// 1. Псевдонимы типов с обобщением
type Container<T> = {
    value: T;
}

const stringContainer: Container<string> = { value: "Hello" };
const numberContainer: Container<number> = { value: 10 };

// 2. Интерфейсы с обобщениями
interface Pair<T, U> {
    first: T;
    second: U;
}

const pair: Pair<number, string> = { first: 10, second: "Hello" };

// 3. Функции с обобщениями
function echo<T>(item: T): T {
    return item;
}

console.log(echo<string>("Hello"));
console.log(echo<number>(10));

// Generic Constraints - ограничения. Только подтип определенного типа
interface IUser {
    name: string;
}

function logName<T extends IUser>(value: T): void {
    console.log(value.name);
}

logName<IUser>({ name: "John" });
logName<{ name: string; id: number }>({ name: "John", id: 10 });

// по умолчанию IUser
// function logName<T extends IUser = IUser>(value: T): void {
//     console.log(value.name);
// }

// Условные типы
interface IUser {
    name: string;
}

type IPerson<T> = T extends IUser ? IUser : null;

function logName<T extends IUser = IPerson<IUser>, U = string>(value: T, str: U): void {
    console.log(value.name + str);
}

logName({ name: "", id: 1 }, "Rus");

// Дискриминантное объединение - общее свойство (дискриминант)
interface INews {
    type: "news";
    title: string;
    urlNews: string;
}

interface IArticle {
    type: "article";
    title: string;
    urlArticle: string;
}

type ContentType = INews | IArticle;

const getImageUrl = (item: ContentType) => {
    return item.urlNews;
}

// Нужна обязательно проверка
const getImageUrl = (item: ContentType) => {
    if (item.type === "news") {
        return item.urlNews;
    }
    return item.urlArticle;
}

// Type assertions - когда уверены в типе, но тайпскрипт не знает об этом - осторожность
const getImageUrl = (item: ContentType) => {
    return (item as INews).urlNews;
}

// Type guards - помогают с узить. В условных выражениях используются if-else switch-case
export const formatTimeAgo = (dateString: string | null) => {
    if (!dateString) return "";
    if (typeof dateString !== "string") return "";

    const date = new Date(dateString);
    // и преобразование дальше

    // свойство в объекте
}

// keyof, lookup types, mapped types
export interface IUser {
    name: string;
    age: number;
    address: string;
}

type Keys = keyof IUser;
const key: Keys = "name";
const key1: Keys = "surname"; // mistake

// MappedTypes - новый тип на основе интерфейса, добавили readonly
type ReadonlyUser = { readonly [K in keyof IUser]: IUser[K] };

// const user: ReadonlyUser

// - минус используем
type ReadonlyUser1 = { -readonly [K in keyof IUser]?: string };

// Lookup types - отдельный интерфейс
type NameType = IUser["name"];


// Утилитарные типы
// Readonly 
type ReadonlyNews = Readonly<INews>;
news.author = "";

// Partial - опциональные поля
type PartialNews = Partial<INews>;

// Required - обязательные поля
type RequiredNews = Required<INews>;

// Pick
type PickNews = Pick<INews, "title" | "urlNews">;

// Record
type RecordNews = Record<'author' | 'category', string>;

// Omit
type OmitNews = Omit<INews, "title" | "urlNews">;

// Exclude, Extract, Omit, NonNullable, NonOptional, PickByValue,
// OmitByValue, PickByType, OmitByType, ReturnType, InstanceType, ThisType, ExactType

// Массивоподобные типы
// readonly - ReadonlyArray<string>, ReadonlyMap<string, number>, ReadonlySet<string>, ReadonlyTuple<string, number>
