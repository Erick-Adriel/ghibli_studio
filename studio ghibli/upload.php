<?php
// Define o diretório onde as imagens serão armazenadas
$diretorioUploads = __DIR__ . '/uploads/';

if (!is_dir($diretorioUploads)) {
    mkdir($diretorioUploads, 0755, true);
}

// Verifica se o arquivo foi enviado
if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $nomeOriginal = $_FILES['image']['name'];
    $tipoArquivo = $_FILES['image']['type'];
    $tamanhoArquivo = $_FILES['image']['size'];
    $nomeTemporario = $_FILES['image']['tmp_name'];

    // Valida o tipo de arquivo (apenas JPG)
    $extensao = strtolower(pathinfo($nomeOriginal, PATHINFO_EXTENSION));
    if ($extensao !== 'jpg' && $extensao !== 'jpeg') {
        echo "Erro: Apenas arquivos JPG são permitidos.";
        exit;
    }

    // Define um nome único para o arquivo, para evitar substituições
    $nomeUnico = uniqid() . '.' . $extensao;
    $caminhoDestino = $diretorioUploads . $nomeUnico;

    // Move o arquivo para o diretório de uploads
    if (move_uploaded_file($nomeTemporario, $caminhoDestino)) {
        echo "Upload realizado com sucesso! O arquivo foi salvo como: $nomeUnico";
    } else {
        echo "Erro ao salvar o arquivo.";
    }
} else {
    echo "Erro: Nenhum arquivo foi enviado ou ocorreu um erro no envio.";
}
?>