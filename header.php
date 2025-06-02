<header class="navbar-container sticky-navbar">
    <div class="container-xxl">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="index.php">
                <img src="./assets/images/logo.png" alt="TakeTech Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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