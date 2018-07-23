<?php
  $template_dir = get_bloginfo('template_directory');
  $css_dir = "{$template_dir}/dist/index.css"
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="<?php echo($css_dir) ?>">
  <?php wp_head();?>
</head>
<body>
  <?php get_header(); ?>
  
  <h1>Hello World</h1>
  <?php wp_footer();?>
</body>
</html>

