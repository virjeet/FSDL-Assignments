// Product data with realistic images
        const products = {
            mens: [
                { id: 1, name: "Classic Blue Shirt", price: 49.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop", category: "mens" },
                { id: 2, name: "Formal Blazer", price: 129.99, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop", category: "mens" },
                { id: 3, name: "Denim Jeans", price: 79.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", category: "mens" },
                { id: 4, name: "Casual T-Shirt", price: 29.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", category: "mens" },
                { id: 13, name: "Sports Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", category: "mens" },
                { id: 14, name: "Leather Belt", price: 34.99, image: "https://images.unsplash.com/photo-1624222247344-550fb60583b2?w=400&h=400&fit=crop", category: "mens" },
                { id: 15, name: "Polo Shirt", price: 44.99, image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop", category: "mens" },
                { id: 16, name: "Running Shoes", price: 119.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", category: "mens" },
                { id: 17, name: "Cargo Shorts", price: 54.99, image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop", category: "mens" },
                { id: 18, name: "Winter Coat", price: 199.99, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop", category: "mens" },
                { id: 19, name: "Formal Pants", price: 69.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop", category: "mens" },
                { id: 20, name: "Graphic Tee", price: 24.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop", category: "mens" }
            ],
            womens: [
                { id: 5, name: "Elegant Dress", price: 89.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop", category: "womens" },
                { id: 6, name: "Designer Handbag", price: 159.99, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", category: "womens" },
                { id: 7, name: "Summer Skirt", price: 54.99, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop", category: "womens" },
                { id: 8, name: "Stylish Heels", price: 99.99, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop", category: "womens" },
                { id: 21, name: "Floral Blouse", price: 64.99, image: "https://images.unsplash.com/photo-1564257577-d18f96c74d05?w=400&h=400&fit=crop", category: "womens" },
                { id: 22, name: "Leather Jacket", price: 179.99, image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&h=400&fit=crop", category: "womens" },
                { id: 23, name: "Maxi Dress", price: 94.99, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop", category: "womens" },
                { id: 24, name: "Designer Sunglasses", price: 149.99, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop", category: "womens" },
                { id: 25, name: "Casual Sneakers", price: 79.99, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop", category: "womens" },
                { id: 26, name: "Evening Clutch", price: 89.99, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=400&fit=crop", category: "womens" },
                { id: 27, name: "Silk Scarf", price: 44.99, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop", category: "womens" },
                { id: 28, name: "Ankle Boots", price: 129.99, image: "https://images.unsplash.com/photo-1605812860427-4024433a70fd?w=400&h=400&fit=crop", category: "womens" }
            ],
            kids: [
                { id: 9, name: "Colorful Hoodie", price: 39.99, image: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&h=400&fit=crop", category: "kids" },
                { id: 10, name: "Kids Sneakers", price: 44.99, image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop", category: "kids" },
                { id: 11, name: "Party Dress", price: 49.99, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop", category: "kids" },
                { id: 12, name: "Denim Jacket", price: 59.99, image: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=400&h=400&fit=crop", category: "kids" },
                { id: 29, name: "Cartoon T-Shirt", price: 19.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop", category: "kids" },
                { id: 30, name: "School Backpack", price: 34.99, image: "https://images.unsplash.com/photo-1577741314755-048d8525d31e?w=400&h=400&fit=crop", category: "kids" },
                { id: 31, name: "Playful Shorts", price: 24.99, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop", category: "kids" },
                { id: 32, name: "Rain Boots", price: 29.99, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop", category: "kids" },
                { id: 33, name: "Princess Gown", price: 54.99, image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400&h=400&fit=crop", category: "kids" },
                { id: 34, name: "Baseball Cap", price: 14.99, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop", category: "kids" },
                { id: 35, name: "Cozy Sweater", price: 34.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop", category: "kids" },
                { id: 36, name: "Light-Up Shoes", price: 49.99, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop", category: "kids" }
            ]
        };

        let cart = [];

        // Render products
        function renderProducts() {
            ['mens', 'womens', 'kids'].forEach(category => {
                const container = document.getElementById(`${category}Products`);
                container.innerHTML = products[category].map(product => `
                    <div class="col-md-6 col-lg-3">
                        <div class="card product-card ${category}">
                            <div class="product-img">
                                <img src="${product.image}" alt="${product.name}" loading="lazy">
                            </div>
                            <div class="product-info">
                                <div class="product-title">${product.name}</div>
                                <div class="product-price">$${product.price.toFixed(2)}</div>
                                <div class="d-flex gap-2">
                                    <button class="btn btn-cart flex-grow-1" onclick="addToCart(${product.id})">
                                        <i class="fas fa-cart-plus"></i> Add to Cart
                                    </button>
                                    <button class="btn btn-buy" onclick="buyNow(${product.id})">
                                        <i class="fas fa-bolt"></i> Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('');
            });
        }

        // Add to cart
        function addToCart(productId) {
            const product = Object.values(products).flat().find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCart();
            showNotification('Added to cart!', 'success');
        }

        // Buy now
        function buyNow(productId) {
            const product = Object.values(products).flat().find(p => p.id === productId);
            cart = [{ ...product, quantity: 1 }];
            updateCart();
            
            const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
            cartModal.show();
            
            setTimeout(() => {
                showNotification('Ready to checkout!', 'info');
            }, 300);
        }

        // Update cart display
        function updateCart() {
            const cartCount = document.getElementById('cartCount');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');
            
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            cartCount.textContent = totalItems;
            
            if (cart.length === 0) {
                cartItems.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
                checkoutBtn.disabled = true;
            } else {
                cartItems.innerHTML = cart.map(item => `
                    <div class="cart-item">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex align-items-center gap-3">
                                <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                                <div>
                                    <h6 class="mb-1">${item.name}</h6>
                                    <p class="text-muted mb-0">$${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div class="d-flex align-items-center gap-3">
                                <div class="quantity-control">
                                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                                    <span>${item.quantity}</span>
                                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                                </div>
                                <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
                checkoutBtn.disabled = false;
            }
            
            cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
        }

        // Update quantity
        function updateQuantity(productId, change) {
            const item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                }
            }
        }

        // Remove from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            showNotification('Item removed from cart', 'info');
        }

        // Checkout with animation
        function checkout() {
            if (cart.length === 0) return;
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const orderId = Math.floor(Math.random() * 1000000);
            
            // Close cart modal
            const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
            cartModal.hide();
            
            // Show success overlay
            document.getElementById('orderId').textContent = orderId;
            document.getElementById('orderTotal').textContent = total.toFixed(2);
            document.getElementById('checkoutOverlay').style.display = 'flex';
            
            // Create confetti
            createConfetti();
            
            // Clear cart
            cart = [];
            updateCart();
        }

        // Close checkout overlay
        function closeCheckout() {
            document.getElementById('checkoutOverlay').style.display = 'none';
        }

        // Create confetti animation
        function createConfetti() {
            const colors = ['#e74c3c', '#3498db', '#f39c12', '#27ae60', '#9b59b6'];
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + '%';
                    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDelay = Math.random() * 0.5 + 's';
                    document.getElementById('checkoutOverlay').appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 3000);
                }, i * 30);
            }
        }

        // Login form
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const passwordError = document.getElementById('passwordError');
            
            // Validate passwords match
            if (password !== confirmPassword) {
                passwordError.style.display = 'block';
                document.getElementById('confirmPassword').classList.add('is-invalid');
                showNotification('Passwords do not match!', 'error');
                return;
            }
            
            // Validate password strength
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters long', 'error');
                return;
            }
            
            // Hide error if shown
            passwordError.style.display = 'none';
            document.getElementById('confirmPassword').classList.remove('is-invalid');
            
            // Save user data
            localStorage.setItem('userName', fullName);
            localStorage.setItem('userEmail', email);
            
            // Show success and update UI
            showNotification('Login successful! Welcome, ' + fullName + '!', 'success');
            updateUserUI(fullName);
            
            const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            loginModal.hide();
            
            // Reset form
            this.reset();
        });

        // Real-time password matching
        document.getElementById('confirmPassword').addEventListener('input', function() {
            const password = document.getElementById('password').value;
            const confirmPassword = this.value;
            const passwordError = document.getElementById('passwordError');
            
            if (confirmPassword && password !== confirmPassword) {
                passwordError.style.display = 'block';
                this.classList.add('is-invalid');
            } else {
                passwordError.style.display = 'none';
                this.classList.remove('is-invalid');
            }
        });

        // Update UI after login
        function updateUserUI(userName) {
            document.getElementById('loginBtn').style.display = 'none';
            document.getElementById('userDropdown').style.display = 'block';
            document.getElementById('userName').textContent = userName;
        }

        // Logout function
        function logout() {
            localStorage.removeItem('userName');
            localStorage.removeItem('userEmail');
            document.getElementById('loginBtn').style.display = 'block';
            document.getElementById('userDropdown').style.display = 'none';
            showNotification('Logged out successfully', 'info');
        }

        // Check if user is already logged in
        window.addEventListener('load', function() {
            const savedUserName = localStorage.getItem('userName');
            if (savedUserName) {
                updateUserUI(savedUserName);
            }
        });

        // Show notification
        function showNotification(message, type = 'info') {
            const colors = {
                success: '#27ae60',
                error: '#e74c3c',
                info: '#3498db'
            };
            
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: ${colors[type]};
                color: white;
                padding: 15px 25px;
                border-radius: 5px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 9999;
                animation: slideIn 0.3s ease-out;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }, 2500);
        }

        // Initialize
        renderProducts();