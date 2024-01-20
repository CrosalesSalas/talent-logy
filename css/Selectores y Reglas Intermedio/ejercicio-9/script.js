<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Caja de Comentarios</title>
</head>
<body>
    <div class="comment-box">
        <h2>Deja un Comentario</h2>
        <form id="commentForm" onsubmit="addComment(); return false;">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required>

            <label for="comment">Comentario:</label>
            <textarea id="comment" name="comment" rows="4" required></textarea>

            <button type="submit">Publicar Comentario</button>
        </form>

        <div class="comment-list" id="commentList">
            <!-- Los comentarios se cargarán aquí desde el almacenamiento local -->
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
