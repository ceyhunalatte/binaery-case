# BINAERY Case Study
This is a small product listing website built for BINAERY, showcasing html/css/js and some minor backend development skills.

## Summaries

### Server
This project is wrapped around a NextJS server in order to access Shopify data with secured keys instead of a static JSON. 

### Website
Website is a static AlpineJS HTML file served from the initial server route of '/'. But the product related requests are made to NextJS server. Static website file can be reviewd at 'src/app/website.html'.

### Shopify store
Currently the store is in development mode and unexpected behavior on add to cart button occurs, you can't access the store without the password. The password will be provided to related parties.

### Animations
Animation files are separated to and can be reviewed from 'public/animateImage.js' and 'public/boxes.js'

### Styling
Styling built entirely with NestJS except for animated boxes. You can review the css file at 'public/styles.css'.