<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $uploadDir = 'uploads/';
    
    // Generate a unique filename for the uploaded image
    $originalFileName = $_FILES['file']['name'];
    $extension = strtolower(pathinfo($originalFileName, PATHINFO_EXTENSION));
    $newFileName = uniqid('image_') . '.' . $extension;
    $uploadFile = $uploadDir . $newFileName;

    // Check if the file is an image
    $imageFileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));
    $allowedExtensions = array('jpg', 'jpeg', 'png', 'gif');

    if (in_array($imageFileType, $allowedExtensions)) {
        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            // Redirect back to the original website
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

