const rootNode = document.getElementById("app"); // ������� ��� ���������� ���������� React
// �������� �������� ������� 
const root = ReactDOM.createRoot(rootNode);
// ��������� � �������� �������
root.render(/*#__PURE__*/React.createElement("h1", null, "Hello React") // �������, ������� �� ����� �������
);
