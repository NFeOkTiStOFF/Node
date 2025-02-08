const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
     <div id="items">
                <h2>Список телефонов</h2>
                <ul>
                    <li>Apple iPhone 12 Pro</li>
                    <li>Samsung Galaxy S20</li>
                    <li>Huawei P40 Pro</li>
                    <li>Google Pixel 5</li>
                </ul>
            </div>  // элемент, который мы хотим создать
);