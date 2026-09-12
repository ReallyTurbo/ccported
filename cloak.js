<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Google</title>
    <link rel="icon" href="https://www.google.com/favicon.ico">
    <style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background-color: #202124;
            font-family: Arial, sans-serif;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .btn {
            background: #1a73e8;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 15px;
        }
        .btn:hover {
            background: #1558b0;
        }
    </style>
</head>
<body>

    <div id="launch-screen">
        <h2>Google Search</h2>
        <p>Click below to open the secure session.</p>
        <button class="btn" onclick="launchCloak()">Open</button>
    </div>

    <script>
        function launchCloak() {
            // Open about:blank window
            let tab = window.open('about:blank', '_blank');
            
            if (!tab || tab.closed || typeof tab.closed == 'undefined') {
                alert('Pop-up blocked! Please allow pop-ups for this site.');
                return;
            }

            // Write the iframe container into the blank tab
            let doc = tab.document;
            doc.open();
            doc.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Google</title>
                    <link rel="icon" href="https://www.google.com/favicon.ico">
                    <style>
                        body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #fff; }
                        iframe { width: 100%; height: 100%; border: none; }
                    </style>
                </head>
                <body>
                    <iframe src="https://schoolported.vercel.app"></iframe>
                </body>
                </html>
            `);
            doc.close();

            // Change the current tab to actual Google
            window.location.replace("https://www.google.com");
        }
    </script>
</body>
</html>
