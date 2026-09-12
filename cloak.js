<!DOCTYPE html>
<html lang="en">

<head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-5937MNQKK5"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', 'G-5937MNQKK5');
  </script>

  <title>School Terminal</title>

  <meta name="description" content="Cool site for stuff" />
</head>

<body>
  <script>
    // Tab cloaking script that opens or redirects using https://google.com as default
    (function() {
      let targetUrl = "https://google.com";
      
      // Basic about:blank cloak implementation or history replacement
      try {
        let win = window.open();
        if (win) {
          win.document.body.style.margin = '0';
          win.document.body.style.height = '100vh';
          let iframe = win.document.createElement('iframe');
          iframe.style.border = 'none';
          iframe.style.width = '100%';
          iframe.style.height = '100%';
          iframe.style.margin = '0';
          iframe.src = targetUrl;
          win.document.body.appendChild(iframe);
          
          // Optionally redirect the original tab to google as well if needed
          window.location.replace(targetUrl);
        } else {
          window.location.replace(targetUrl);
        }
      } catch (e) {
        window.location.replace(targetUrl);
      }
    })();
  </script>
</body>

</html>
