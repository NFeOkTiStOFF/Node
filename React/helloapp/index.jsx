const rootNode = document.getElementById("app");    // ������� ��� ���������� ���������� React
// �������� �������� ������� 
const root = ReactDOM.createRoot(rootNode);
// ��������� � �������� �������
root.render(
     <div id="items">
                <h2>������ ���������</h2>
                <ul>
                    <li>Apple iPhone 12 Pro</li>
                    <li>Samsung Galaxy S20</li>
                    <li>Huawei P40 Pro</li>
                    <li>Google Pixel 5</li>
                </ul>
            </div>  // �������, ������� �� ����� �������
);