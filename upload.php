<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDir = 'uploads/';
    $uploadFile = $uploadDir . basename($_FILES['file']['name']);

    // Check if the file is an image
    $imageFileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
    $allowedExtensions = array('jpg', 'jpeg', 'png', 'gif');

    if (in_array($imageFileType, $allowedExtensions)) {
        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            header('Location: index.html');
            exit;
        } else {
            echo 'Error uploading file.';
        }
    } else {
        echo 'Invalid file type. Please upload a valid image.';
    }
}
?>
