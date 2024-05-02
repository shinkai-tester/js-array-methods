// Добавление элемента в конец массива и удаление последнего элемента
let testCaseIds = [101, 102, 103];
testCaseIds.push(104); // Массив теперь: [101, 102, 103, 104]
let lastAdded = testCaseIds.pop(); // Удаляет и возвращает 104, массив теперь: [101, 102, 103]

// Удаление первого элемента из массива и добавление нового элемента в начало
let testQueue = ["lowPriorityTest1", "lowPriorityTest2"];
let nextTest = testQueue.shift(); // Удаляет и возвращает "lowPriorityTest1", массив теперь: ["lowPriorityTest2"]
testQueue.unshift("highPriorityTest"); // Массив теперь: ["highPriorityTest", "lowPriorityTest2"]

// Вставка элемента на определенную позицию в массиве
let testRunOrder = ["testA", "testB", "testC"];
testRunOrder.splice(1, 0, "criticalTest"); // Массив теперь: ["testA", "criticalTest", "testB", "testC"]

// Получение подмножества элементов массива
let all_tests = ["test1", "test2", "test3", "test4"];
let testsForParallelRun = all_tests.slice(0, 2); // ["test1", "test2"]

// Объединение двух массивов в один
let unitTestResults = ["Pass", "Fail"];
let integrationTestResults = ["Pass", "Pass"];
let combinedResults = unitTestResults.concat(integrationTestResults); // ["Pass", "Fail", "Pass", "Pass"]

// Применение функции ко всем элементам массива
let testResults = [
  { id: 1, status: "Pass" },
  { id: 2, status: "Fail" },
];
testResults.forEach((result) =>
  console.log(`Test ID: ${result.id}, Status: ${result.status}`)
); // Выводит результат каждого теста

// Фильтрация массива по определенному условию
let testCases = [
  { id: 1, type: "automatic" },
  { id: 2, type: "manual" },
  { id: 3, type: "automatic" },
];
let manualTests = testCases.filter((test) => test.type === "manual"); // [{"id": 2, "type": "manual"}]

// Проверка, удовлетворяет ли хотя бы один элемент массива условию
let testErrors = ["minor", "critical", "minor"];
if (testErrors.some((error) => error === "critical"))
  console.log("Critical error found!"); // Выводит сообщение, если находит критическую ошибку

// Поиск элемента в массиве по определенному условию
let specificTest = testCases.find((test) => test.id === 2); // Возвращает объект теста с id 2

// Сортировка массива в лексикографическом порядке
let testPriorities = ["low", "high", "medium"];
testPriorities.sort(); // ["high", "low", "medium"]

// Проверка наличия элемента в массиве
let testSuite = ["LoginTest", "DashboardTest", "ProfileTest"];
if (testSuite.includes("LoginTest"))
  console.log("Login test is part of the suite.");

// Применение функции к каждому элементу массива и создание нового массива из результатов
let numbers = [1, 2, 3, 4];
let squares = numbers.map((number) => number * number); // [1, 4, 9, 16]

// Использование Spread оператора для слияния массивов
let basicTests = ["login", "logout"];
let advancedTests = ["profileEdit", "dashboardAccess"];
let allTests = [...basicTests, ...advancedTests]; // ["login", "logout", "profileEdit", "dashboardAccess"]

// Копирование массива для предотвращения изменений в оригинале
let originalTests = ["testA", "testB", "testC"];
let copiedTests = [...originalTests];

// Разделение строки на массив символов
let testName = "login";
let chars = [...testName]; // ['l', 'o', 'g', 'i', 'n']

// Слияние объектов с перезаписью одинаковых свойств
let defaultSettings = { timeout: 5000, retries: 3 };
let customSettings = { retries: 5, mode: "strict" };
let mergedSettings = { ...defaultSettings, ...customSettings }; // { timeout: 5000, retries: 5, mode: 'strict' }

// Передача элементов массива как отдельных аргументов в функцию
let testIds = [1, 2, 3];
function runTests(id1, id2, id3) {
  console.log(`Running tests: ${id1}, ${id2}, ${id3}`);
}
runTests(...testIds); // Running tests: 1, 2, 3
