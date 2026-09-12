<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Google</title>
    <link rel="icon" href="https://www.google.com/favicon.ico">
</head>
<body>
    <script>
        window.addEventListener('click', () => {
            let win = window.open();
            win.document.open();
            win.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Google</title>
                    <link rel="icon" href="https://www.google.com/favicon.ico">
                    <style>
                        body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
                        iframe { width: 100%; height: 100%; border: none; }
                    </style>
                </head>
                <body>
                    <iframe src="https://example.com"></iframe>
                </body>
                </html>
            `);
            win.document.close();
            window.location.replace("https://www.google.com");
        }, { once: true });
    </script>
    <p>Click anywhere on the page to launch.</p>
</body>
</html>
