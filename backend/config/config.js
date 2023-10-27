// PORT=5001
// DB_URI = mongodb+srv://zara:zara@cluster0.vfz23.mongodb.net/zara?retryWrites=true&w=majority
// STRIPE_API_KEY= 
// STRIPE_SECRET_KEY= 
// JWT_SECRET= hiii
// JWT_EXPIRE= 365d
// SMPT_SERVICE = gmail
// SMPT_MAIL= himanshu16app@gmail.com
// SMPT_PASSWORD=Himanshu@16
// SMPT_HOST= smtp.gmail.com
// SMPT_PORT= 587
// CLOUDINARY_NAME=dafgzdfhl
// CLOUDINARY_API_KEY=249597737563462
// CLOUDINARY_API_SECRET=bBPA5ipqv_UU3F1vIxbCEyxnvzM



// server{
//     listen 80;
//     server_name wach.quest;
//     location / {
//         proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
//         proxy_set_header Host $host;
//         proxy_pass http://127.0.0.1:5001;
//         proxy_http_version 1.1;
//         proxy_set_header Upgrade $http_upgrade;
//         proxy_set_header Connection "upgrade";
//         # location /overview {
//         #     proxy_pass http://127.0.0.1:5001$request_uri;
//         #     proxy_redirect off;
//         # }
//     }
// }