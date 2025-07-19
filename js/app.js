// パフォーマンス最適化
// ページロード完了まで重要でない要素を非表示
document.documentElement.classList.add('preload-hidden');

// スムーススクロール機能の強化
document.addEventListener('DOMContentLoaded', function() {
    // プリロード状態を解除
    document.documentElement.classList.remove('preload-hidden');
    // ナビゲーションリンクとロゴのスムーススクロール
    const navLinks = document.querySelectorAll('.nav-item a[href^="#"], .logo a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                // カスタムスムーススクロール（イージング効果付き）
                smoothScrollTo(targetPosition, 800);
            }
        });
    });
    
    // スムーススクロール関数（イージング効果付き）
    function smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }
        
        // イージング関数
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
    }
    
    // アクティブなナビゲーション項目のハイライト
    function highlightActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-item a[href^="#"]');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            if (window.pageYOffset >= (sectionTop - headerHeight - 50)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // スクロール時にアクティブなナビゲーションを更新（重複削除）
    // window.addEventListener('scroll', highlightActiveNav);
    
    // 初期ロード時にもアクティブなナビゲーションを設定
    highlightActiveNav();
    
    // スクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // アニメーション対象の要素を監視
    const animateElements = document.querySelectorAll('.section-title, .about-content, .skill-category, .project-card, .contact-content');
    animateElements.forEach(el => {
        el.classList.add('fade-out');
        observer.observe(el);
    });
    
    // パフォーマンス最適化: 不要なイベントリスナーのthrottle
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    window.addEventListener('scroll', function() {
        if (!scrollTimeout) {
            scrollTimeout = setTimeout(function() {
                highlightActiveNav();
                scrollTimeout = null;
            }, 16); // 60fps相当
        }
    });
});

// 画像モーダル機能
function openImageModal() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const screenshot = document.querySelector('.screenshot-img');
    
    modalImage.src = screenshot.src;
    modal.classList.add('show');
    modal.style.display = 'flex';
    
    // ESCキーでモーダルを閉じる
    document.addEventListener('keydown', handleEscKey);
    
    // ボディのスクロールを無効化
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    
    modal.classList.remove('show');
    modal.style.display = 'none';
    
    // ESCキーのイベントリスナーを削除
    document.removeEventListener('keydown', handleEscKey);
    
    // ボディのスクロールを有効化
    document.body.style.overflow = 'auto';
}

function handleEscKey(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
}

// モーダル内の画像クリックで閉じることを防ぐ
document.addEventListener('DOMContentLoaded', function() {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});