<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="./styles/contact-us.css">

    <link
        href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
</head>

<body>
    <section id="header">
        <?php include 'header.php'; ?>
    </section>
    <main>
        <div>
            <section id="contact-banner">
                <div class="global-banner global-banner-others others-banner-mobile">
                    <div class="container-xxl">
                        <div class="row">
                            <div class="col-sm-6 d-flex align-items-center">
                                <div class="contact-banner-text">
                                    <h1>Contact Us</h1>
                                    <p>
                                        TakeTech appreciate your interest in us. It's just not a website for you it's a
                                        one-stop solution for all your problems. Whether you are a client, a job seeker,
                                        a journalist, analyst, investor or just viewer, if you have any question, we are
                                        here to answer all your queries, just fill-up the form or drop a mail.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="contact-banner-image">
                                    <img src="./assets/images/Contact Us Banner.png" alt="contacts">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class='body-curve-left home-contactus home-footer'>
                <section class="gap-top gap-bottom" id="contact-us-form">
                    <div class="container-fluid p-0 position-relative contact-us-form-container">
                        <div class="contactus-background-image">
                            <img src="./assets/images/ContactUs Bg.jpg" alt="">
                        </div>

                        <div class="form-overlay d-flex justify-content-end align-items-center">
                            <div class="contact-form-wrapper">
                                <form class="contact-subscription-form">
                                    <h6>Get In Touch</h6>
                                    <input type="text" class="form-control" placeholder="Name">
                                    <input type="email" class="form-control" placeholder="Email">
                                    <input type="text" class="form-control" placeholder="Subject">
                                    <textarea class="form-control" placeholder="Your Message"></textarea>

                                    <div class="d-flex justify-content-center">
                                        <button type="submit" class="secondary-button">Submit</button>
                                    </div>

                                    <div class="contact-info mt-4">
                                        <h5 class="mb-2">Contact Details</h5>
                                        <div
                                            class="d-flex justify-content-center gap-3 align-items-center mt-2 contact-details-info">
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="./assets/images/Contact Mail.png" alt="mail" class="icon-img">
                                                <p class="mb-0">mail@takethedevs.com</p>
                                            </div>
                                            <div class="d-flex align-items-center gap-2">
                                                <img src="./assets/images/Contact Phone.png" alt="phone" class="icon-img">
                                                <p class="mb-0">+91 7890948016</p>
                                            </div>
                                        </div>

                                        <h5 class="mt-5 mb-2">Social Media</h5>
                                        <div class="d-flex justify-content-center gap-3 mt-2">
                                            <img src="./assets/images/Contact Facebook.png" alt="Facebook"
                                                class="contact-social-icon">
                                            <img src="./assets/images/Contact WhatsApp.png" alt="WhatsApp"
                                                class="contact-social-icon">
                                            <img src="./assets/images/Contact Insta.png" alt="Instagram"
                                                class="contact-social-icon">
                                            <img src="./assets/images/Contact Linkedin.png" alt="LinkedIn"
                                                class="contact-social-icon">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="gap-top gap-bottom" id="contact-section">

                </section>
            </div>
        </div>
    </main>

    <section class="gap-top" id="footer">
        <?php include 'footer.php'; ?>
    </section>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>