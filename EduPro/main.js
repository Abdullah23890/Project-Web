// Initialize AOS
        AOS.init({
            duration: 1000,
            once: true
        });

// Gallery Data
        const galleryData = [
            {
                id: 1,
                category: 'math',
                title: 'Advanced Calculus',
                description: 'Master derivatives, integrals, and advanced mathematical concepts',
                icon: 'fa-square-root-alt',
                students: 150,
                duration: '6 months',
                gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
            },
            {
                id: 2,
                category: 'science',
                title: 'Physics Fundamentals',
                description: 'Explore mechanics, thermodynamics, and quantum physics',
                icon: 'fa-atom',
                students: 120,
                duration: '8 months',
                gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
            },
            {
                id: 3,
                category: 'language',
                title: 'English Literature',
                description: 'Dive deep into classic and contemporary literature',
                icon: 'fa-book-open',
                students: 200,
                duration: '4 months',
                gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
            },
            {
                id: 4,
                category: 'coding',
                title: 'Web Development',
                description: 'Learn HTML, CSS, JavaScript and modern frameworks',
                icon: 'fa-laptop-code',
                students: 180,
                duration: '10 months',
                gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)'
            },
            {
                id: 5,
                category: 'math',
                title: 'Statistics & Probability',
                description: 'Data analysis, probability theory, and statistical methods',
                icon: 'fa-chart-line',
                students: 95,
                duration: '5 months',
                gradient: 'linear-gradient(135deg, #fa709a, #fee140)'
            },
            {
                id: 6,
                category: 'science',
                title: 'Chemistry Essentials',
                description: 'Organic, inorganic, and physical chemistry concepts',
                icon: 'fa-flask',
                students: 110,
                duration: '7 months',
                gradient: 'linear-gradient(135deg, #30cfd0, #330867)'
            },
            {
                id: 7,
                category: 'language',
                title: 'Spanish for Beginners',
                description: 'Start your journey to fluency in Spanish',
                icon: 'fa-comments',
                students: 145,
                duration: '6 months',
                gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)'
            },
            {
                id: 8,
                category: 'coding',
                title: 'Python Programming',
                description: 'From basics to advanced Python development',
                icon: 'fa-python',
                students: 220,
                duration: '8 months',
                gradient: 'linear-gradient(135deg, #ff9a56, #ff6a88)'
            },
            {
                id: 9,
                category: 'math',
                title: 'Geometry Mastery',
                description: 'Shapes, angles, theorems, and spatial reasoning',
                icon: 'fa-shapes',
                students: 88,
                duration: '5 months',
                gradient: 'linear-gradient(135deg, #667eea, #764ba2)'
            },
            {
                id: 10,
                category: 'science',
                title: 'Biology Basics',
                description: 'Cell biology, genetics, ecology, and human anatomy',
                icon: 'fa-dna',
                students: 135,
                duration: '6 months',
                gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
            },
            {
                id: 11,
                category: 'language',
                title: 'French Language',
                description: 'Comprehensive French language and culture course',
                icon: 'fa-globe',
                students: 92,
                duration: '7 months',
                gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
            },
            {
                id: 12,
                category: 'coding',
                title: 'Mobile App Development',
                description: 'Create iOS and Android apps with React Native',
                icon: 'fa-mobile-alt',
                students: 165,
                duration: '9 months',
                gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)'
            }
        ];

        // Initialize Gallery
        function initGallery() {
            const grid = document.getElementById('galleryGrid');
            grid.innerHTML = galleryData.map(item => `
                <div class="gallery-item" data-category="${item.category}">
                    <div class="item-image" style="background: ${item.gradient}">
                        <i class="fas ${item.icon}"></i>
                    </div>
                    <div class="item-content">
                        <span class="item-category">${item.category.toUpperCase()}</span>
                        <h3 class="item-title">${item.title}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-meta">
                            <div class="item-meta-item">
                                <i class="fas fa-users"></i>
                                <span>${item.students} students</span>
                            </div>
                            <div class="item-meta-item">
                                <i class="fas fa-clock"></i>
                                <span>${item.duration}</span>
                            </div>
                        </div>
                        <button class="view-btn" onclick="viewDetails(${item.id})">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Filter Functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');
                const items = document.querySelectorAll('.gallery-item');

                items.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.classList.remove('hide');
                    } else {
                        item.classList.add('hide');
                    }
                });
            });
        });

        // View Details Function
        function viewDetails(id) {
            const course = galleryData.find(item => item.id === id);
            
            Swal.fire({
                title: `<i class="fas ${course.icon}"></i> ${course.title}`,
                html: `
                    <div style="text-align: left; padding: 20px;">
                        <p style="margin-bottom: 15px;"><strong>Category:</strong> ${course.category.toUpperCase()}</p>
                        <p style="margin-bottom: 15px;"><strong>Description:</strong> ${course.description}</p>
                        <p style="margin-bottom: 15px;"><i class="fas fa-users"></i> <strong>Students Enrolled:</strong> ${course.students}</p>
                        <p style="margin-bottom: 15px;"><i class="fas fa-clock"></i> <strong>Duration:</strong> ${course.duration}</p>
                        <hr>
                        <p style="margin-top: 15px; color: #667eea;"><i class="fas fa-info-circle"></i> Click "Enroll Now" to start your learning journey!</p>
                    </div>
                `,
                showCancelButton: true,
                confirmButtonText: '<i class="fas fa-check"></i> Enroll Now',
                cancelButtonText: '<i class="fas fa-times"></i> Close',
                confirmButtonColor: '#667eea',
                cancelButtonColor: '#718096',
                width: '600px'
            }).then((result) => {
                if (result.isConfirmed) {
                    showEnrollmentForm(course);
                }
            });
        }

        // Show Enrollment Form
        function showEnrollmentForm(course = null) {
            Swal.fire({
                title: '<i class="fas fa-user-plus"></i> Enrollment Form',
                html: `
                    <form id="enrollmentForm" style="text-align: left;">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Full Name</label>
                            <input type="text" id="studentName" class="swal2-input" placeholder="Enter your name" required style="width: 100%; margin: 0;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Email</label>
                            <input type="email" id="studentEmail" class="swal2-input" placeholder="Enter your email" required style="width: 100%; margin: 0;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Phone</label>
                            <input type="tel" id="studentPhone" class="swal2-input" placeholder="Enter your phone" required style="width: 100%; margin: 0;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Course</label>
                            <select id="courseSelect" class="swal2-input" style="width: 100%; margin: 0;">
                                ${course ? `<option value="${course.title}">${course.title}</option>` : ''}
                                <option value="Advanced Calculus">Advanced Calculus</option>
                                <option value="Physics Fundamentals">Physics Fundamentals</option>
                                <option value="English Literature">English Literature</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Python Programming">Python Programming</option>
                            </select>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: '<i class="fas fa-paper-plane"></i> Submit',
                cancelButtonText: '<i class="fas fa-times"></i> Cancel',
                confirmButtonColor: '#667eea',
                cancelButtonColor: '#718096',
                width: '600px',
                preConfirm: () => {
                    const name = document.getElementById('studentName').value;
                    const email = document.getElementById('studentEmail').value;
                    const phone = document.getElementById('studentPhone').value;
                    const course = document.getElementById('courseSelect').value;

                    if (!name || !email || !phone) {
                        Swal.showValidationMessage('Please fill in all fields');
                        return false;
                    }
                    return { name, email, phone, course };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Enrollment Successful!',
                        html: `
                            <p>Thank you, <strong>${result.value.name}</strong>!</p>
                            <p>You have successfully enrolled in <strong>${result.value.course}</strong></p>
                            <p>We will contact you at <strong>${result.value.email}</strong> soon!</p>
                        `,
                        confirmButtonColor: '#667eea',
                        confirmButtonText: '<i class="fas fa-thumbs-up"></i> Great!'
                    });
                }
            });
        }

        // Show Contact Form
        function showContactForm() {
            Swal.fire({
                title: '<i class="fas fa-envelope"></i> Contact Us',
                html: `
                    <form id="contactForm" style="text-align: left;">
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Name</label>
                            <input type="text" id="contactName" class="swal2-input" placeholder="Your name" required style="width: 100%; margin: 0;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Email</label>
                            <input type="email" id="contactEmail" class="swal2-input" placeholder="Your email" required style="width: 100%; margin: 0;">
                        </div>
                        <div style="margin-bottom: 15px;">
                            <label style="display: block; margin-bottom: 5px; font-weight: 600;">Message</label>
                            <textarea id="contactMessage" class="swal2-textarea" placeholder="Your message" required style="width: 100%; margin: 0; min-height: 100px;"></textarea>
                        </div>
                    </form>
                `,
                showCancelButton: true,
                confirmButtonText: '<i class="fas fa-paper-plane"></i> Send Message',
                cancelButtonText: '<i class="fas fa-times"></i> Cancel',
                confirmButtonColor: '#667eea',
                cancelButtonColor: '#718096',
                width: '600px',
                preConfirm: () => {
                    const name = document.getElementById('contactName').value;
                    const email = document.getElementById('contactEmail').value;
                    const message = document.getElementById('contactMessage').value;

                    if (!name || !email || !message) {
                        Swal.showValidationMessage('Please fill in all fields');
                        return false;
                    }
                    return { name, email, message };
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Thank you for contacting us. We will get back to you soon!',
                        confirmButtonColor: '#667eea',
                        confirmButtonText: '<i class="fas fa-check"></i> OK'
                    });
                }
            });
        }

        // Counter Animation
        function animateCounter() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const increment = target / 100;

                const updateCounter = () => {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + increment);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
            });
        }

        // Scroll to Section
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            const scrollTop = document.getElementById('scrollTop');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                scrollTop.classList.add('show');
            } else {
                navbar.classList.remove('scrolled');
                scrollTop.classList.remove('show');
            }
        });

        // Scroll to top
        document.getElementById('scrollTop').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // Initialize on page load
        window.addEventListener('load', function() {
            initGallery();
            animateCounter();
            
            setTimeout(() => {
                Swal.fire({
                    title: '<i class="fas fa-graduation-cap"></i> Welcome to EduPro!',
                    text: 'Your journey to academic excellence starts here',
                    icon: 'info',
                    confirmButtonText: '<i class="fas fa-rocket"></i> Let\'s Explore',
                    confirmButtonColor: '#667eea',
                    timer: 3000,
                    timerProgressBar: true
                });
            }, 500);
        });

        // Close mobile menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (window.innerWidth < 992 && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });