window.addEventListener("DOMContentLoaded", () => {
  Promise.all([fetch("assets/include/header.html"), fetch("assets/include/footer.html")])
    .then((res) => Promise.all(res.map((r) => r.text())))
    .then(([header, footer]) => {
      document.body.insertAdjacentHTML("afterbegin", header);
      document.body.insertAdjacentHTML("beforeend", footer);
    });
    
  });
  const current = location.pathname.split("/").pop();
  document.querySelectorAll("nav .nav-link").forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
  const loader =  document.querySelector('.logo-container');
  
  document.addEventListener("click", function(e) {
      let loader = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <!-- Bootstrap CSS from CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Css  Link -->
<style>
        /* Custom Styling for the loader */
    :root{
      --deep:#7b4397;
      --gold:#ffcc70; 
      --lavender-light: #f5f0fa;
      --blush-light: #fffbfd;
      --purple-base: rgba(123, 67, 151, 0.2); /* Faint base color */
      --purple-active: #7b4397; /* Deep active color */
    }
    body {
        /* Set the overall background to a subtle, luxurious gradient across the whole page */
        background: linear-gradient(135deg, var(--blush-light) 0%, var(--lavender-light) 100%);
        min-height: 100vh;
        margin: 0;
    }
    .grad-text{
      /* Use the strong theme gradient for text */
      background: linear-gradient(90deg,var(--deep), #9b59b6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .loading-container {
        /* Center content perfectly on the screen */
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .loading-content {
        text-align: center;
        padding: 2rem; 
        position: relative; 
    }
    .loading-text {
        color: var(--deep); 
        font-weight: 500;
        letter-spacing: 1px;
    }

    /* Keyframes for the continuous spinning and color shifting effect */
    @keyframes spin-and-shift {
        /* The element rotates continuously */
        0% { 
            transform: translate(-50%, -50%) rotate(0deg); 
            /* Start with top/right borders solid, simulating light source */
            border-top-color: var(--purple-active); 
            border-right-color: var(--purple-active);
            border-bottom-color: var(--purple-base);
            border-left-color: var(--purple-base);
        }
        50% { 
            transform: translate(-50%, -50%) rotate(180deg); 
            /* Midpoint: Top/right borders are less intense */
            border-top-color: var(--purple-base);
            border-right-color: var(--purple-base);
            border-bottom-color: var(--purple-active);
            border-left-color: var(--purple-active);
        }
        100% { 
            transform: translate(-50%, -50%) rotate(360deg); 
            /* End: Back to start state */
            border-top-color: var(--purple-active); 
            border-right-color: var(--purple-active);
            border-bottom-color: var(--purple-base);
            border-left-color: var(--purple-base);
        }
    }

    /* Logo Container (The Rounded Square - now bigger) */
    .logo-container {
        width: 100px; 
        height: 100px;
        background: linear-gradient(135deg,#D6A4E6,#FADADD);
        color: #fff;
        font-weight: 700;
        font-size: 40px; 
        border-radius: 18px; 
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 2rem auto;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); 
        position: relative; 
        z-index: 2; 
    }

    /* The Purple Gradient Outline Spinner (Integrated Pseudo-element) */
    .logo-container::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        
        width: 110px; 
        height: 110px;
        
        /* Base border color is set, but colors are managed by the keyframes */
        border: 6px solid var(--purple-base);
        
        border-radius: 20px; 
        z-index: 1; 
        
        /* Apply the new animation */
        transform: translate(-50%, -50%);
        animation: spin-and-shift 4s ease-in-out infinite; 
    }

</style>
</head>
<body>

<div class="loading-container">
    <div class="loading-content">
        <!-- Logo Display (Rounded Square with Gradient Spinner) -->
        <div class="logo-container">WE</div>
        
        <!-- Text with the main gradient -->
        <h2 class="grad-text fw-bold mb-1 display-5">Women Empower Hub</h2>
        <p class="text-muted lead fw-light mt-2 loading-text">Connecting you to growth...</p>
    </div>
</div>

</body>
</html>

      `
     
      const target = e.target;
      // Handle anchor links
      if (target.tagName === "A" ) {
        if(target.href.includes("#")){
          return
        }
        e.preventDefault(); // Stop immediate navigation
       // loader.style.display = "flex"; // Show loader
       document.body.innerHTML = loader;
       console.log("hello")
        setTimeout(() => {
          window.location.href = target.href; // Redirect after 1 sec
        }, 1000);
      }

      // Handle buttons if you want them to show loader before action
      // if (target.tagName === "BUTTON" ) {
      // //  loader.style.display = "flex"; 
      //   setTimeout(() => {
          
      //   }, 500);
      // }
    });
