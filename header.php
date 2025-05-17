<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
</head>

<body>

    <header class="navbar-container sticky-navbar">
        <div class="container-xxl">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="index.php">
                    <img src="./assets/images/logo.png" alt="TakeTech Logo" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto nav-links">
                        <li class="nav-item">
                            <a class="nav-link <?php if(basename($_SERVER['PHP_SELF']) == 'index.php') echo 'active-link'; ?>" href="index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if(basename($_SERVER['PHP_SELF']) == 'aboutus.php') echo 'active-link'; ?>" href="aboutus.php">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if(basename($_SERVER['PHP_SELF']) == 'services.php') echo 'active-link'; ?>" href="services.php">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?php if(basename($_SERVER['PHP_SELF']) == 'blog.php') echo 'active-link'; ?>" href="blog.php">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="contactus.php">
                                <button class="btn header-button <?php if(basename($_SERVER['PHP_SELF']) == 'contactus.php') echo 'active-link'; ?>">Contact Us</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>

</body>

</html>
