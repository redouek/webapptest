<?php

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  header('Location: teste-saliva-pro.html');
  exit;
}

$nome = $_GET['nome'];
$data = $_GET['data'];
$hora = $_GET['hora'];
$fluxo_nao_estimulado = $_GET['fluxo_nao_estimulado'];
$ph = $_GET['ph'];
$fluxo_estimulado = $_GET['fluxo_estimulado'];
$capacidade_tampao = $_GET['capacidade_tampao'];
$exames_complementares = $_GET['exames_complementares'];

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resultados - Teste Saliva PRO</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <img src="logo.jpg" alt="Logo">
  </header>
  <main>
    <h1>Resultados do Exame Saliva PRO</h1>
    <p>
      Paciente: <strong><?php echo $nome; ?></strong>
    </p>
    <p>
      Data do exame: <strong><?php echo $data; ?></strong>
    </p>
    <p>
      Hora do exame: <strong><?php echo $hora; ?></strong>
    </p>
    <table>
      <tr>
        <th>Exame</th>
        <th>Resultado</th>
      </tr>
      <tr>
        <td>Fluxo salivar não-estimulado</td>
        <td><?php echo $fluxo_nao_estimulado; ?> ml/min</td>
      </tr>
      <tr>
        <td>pH salivar</td>
        <td><?php echo $ph; ?></td>
      </tr>
      <tr>
        <td>Fluxo salivar estimulado</td>
        <td><?php echo $fluxo_estimulado; ?> ml/min</td>
      </tr>
      <tr>
        <td>Capacidade tampão</td>
        <td><?php echo $capacidade_tampao; ?></td>
      </tr>
      <tr>
        <td>Exames complementares</td>
        <td><?php echo $exames_complementares; ?></td>
      </tr>
    </table>
    <br>
    <a href="index.html" class="button">Iniciar Novo Teste</a>
  </main>
</body>
</html>
