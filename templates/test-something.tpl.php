<html>
  <head>
    <title>Hello, Angular</title>
  </head>
  <body>
    <app-main>Loading...</app-main>
    <script src="<?php print drupal_get_path('module', 'drugular') ;?>/app/node_modules/zone.js/dist/zone.js"></script>
    <script src="<?php print drupal_get_path('module', 'drugular') ;?>/app/node_modules/systemjs/dist/system.src.js"></script>
    <script src="<?php print drupal_get_path('module', 'drugular') ;?>/app/system.config.js"></script>

    <script>
        System.import('app:dist/main.js').catch(function (err) {
            console.error(err);
        });
    </script>
  </body>
</html>