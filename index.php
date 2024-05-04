<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "task_manager";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Adicionando uma tarefa
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $due_date = $_POST['due_date'];
    $category_id = $_POST['category_id'];
    $priority = $_POST['priority'];
    $user_id = $_POST['user_id'];

    $stmt = $conn->prepare("INSERT INTO tasks (title, description, due_date, category_id, priority, user_id) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssi", $title, $description, $due_date, $category_id, $priority, $user_id);
    $stmt->execute();
    
    if ($stmt->affected_rows > 0) {
        echo "Tarefa adicionada com sucesso!";
    } else {
        echo "Erro ao adicionar tarefa.";
    }

    $stmt->close();
}

$conn->close();
?>