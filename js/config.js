const CONFIG = {
nama: "YamzzHost", // Nama Store
profil: "./img/yamzz.jpg", // Url Profil
banner: "./img/banner.jpg", // Url Banner 
tentang: "YamzzHost Market adalah toko online terpercaya yang telah melayani ribuan pelanggan sejak 2020. Kami menyediakan berbagai produk digital untuk kebutuhan sehari-hari dengan kualitas terbaik dan harga terjangkau.\n\nKomitmen kami adalah memberikan pengalaman berbelanja yang menyenangkan dengan pelayanan terbaik, produk original, dan garansi resmi untuk semua produk yang kami jual.",
alamat: "Jl. Kav Kartika No. 03, Bekasi, Indonesia",
sosial_media: {
  email: "yamzzoffc@gmail.com", // Email
  youtube: "yamzzreal", // YouTube Username 
  tiktok: "Belum Tersedia", // Tiktok Username 
  whatsapp: "628567858991", // WhatsApp Number 
  telegram: "yamzzzx" // Telegram Username
},
payment: {
  dana: "08567858991", // Payment Dana
  gopay: "08567858991", // Payment Gopay 
  ovo: "Belum Tersedia", // Payment Ovo 
  qris: "https://files.catbox.moe/nf7mqg.jpg" // Url Qris
},
telegram_api: {
  bot: "8300661133:AAGQz5BXDem3Gk6xkZ7RlspuvPawRT1ZgN0", // Token bot father
  chatid: "8204777220" // ID telegram
},
}

// Produk
const productsData = {
            "Hosting": [
              {
                "id": 1,
                "name": "Panel Pterodactyl",
                "icon": "fas fa-server",
                "description": "Panel Pterodactyl hosting bot/game dengan performa stabil dan harga terjangkau.",
                "variants": [
                  { "name": "1GB RAM", "price": 500 },
                  { "name": "2GB RAM", "price": 1000 },
                  { "name": "3GB RAM", "price": 1500 },
                  { "name": "4GB RAM", "price": 2000 },
                  { "name": "5GB RAM", "price": 2500 },
                  { "name": "6GB RAM", "price": 3000 },
                  { "name": "7GB RAM", "price": 3500 },
                  { "name": "8GB RAM", "price": 4000 },
                  { "name": "9GB RAM", "price": 4500 },
                  { "name": "10GB RAM", "price": 5000 },
                  { "name": "Unlimited RAM", "price": 7000 },
                  { "name": "Reseller Panel", "price": 8000 },
                  { "name": "Admin Panel", "price": 10000 },
                  { "name": "Patner Panel", "price": 12000 },
                  { "name": "TK Panel", "price": 15000 },
                  { "name": "Owner Panel", "price": 20000 }
                ]
              },
              {
                "id": 2,
                "name": "VPS Kecil",
                "icon": "fas fa-microchip",
                "description": "Virtual Private Server murah untuk belajar dan project kecil.",
                "variants": [
                  { "name": "2 CORE / 4GB RAM", "price": 25000 },
                  { "name": "2 CORE / 8GB RAM", "price": 30000 }
                ]
              },
              {
                "id": 3,
                "name": "VPS Menengah",
                "icon": "fas fa-hdd",
                "description": "VPS menengah dengan performa cukup untuk website atau panel hosting.",
                "variants": [
                  { "name": "4 CORE / 8GB RAM", "price": 35000 },
                  { "name": "4 CORE / 16GB RAM", "price": 40000 }
                ]
              },
              {
                "id": 4,
                "name": "VPS Atas",
                "icon": "fas fa-hdd",
                "description": "Vps Atas dengan performa tinggi, cocok untuk skala besar.",
                "variants": [
                  { "name": "8 CORE / 16GB RAM", "price": 50000 },
                  { "name": "8 CORE / 32GB RAM", "price": 60000 }
                ]
              },
              {
                "id": 5,
                "name": "Web Hosting",
                "icon": "fas fa-globe",
                "description": "Hosting website dengan panel cPanel / DirectAdmin, cocok untuk pemula.",
                "variants": [
                  { "name": "Starter (1GB Storage)", "price": 25000 },
                  { "name": "Basic (5GB Storage)", "price": 50000 },
                  { "name": "Pro (10GB Storage)", "price": 100000 }
                ]
              }
            ],
            "Desain": [
                {
                    id: 6,
                    name: "Desain Logo",
                    icon: "fas fa-pen-nib",
                    description: "Jasa pembuatan logo dengan berbagai gaya desain. Cocok untuk brand, usaha, atau komunitas.",
                    variants: [
                        { name: "Logo Collab", price: 2000 },
                        { name: "Logo Vector", price: 1000 },
                        { name: "Logo Mascot", price: 1000 },
                        { name: "Logo Monogram", price: 3000 },
                        { name: "Logo 3D", price: 5000 },
                        { name: "Request Custom", price: "Harga sesuai request" }
                    ]
                },
                {
                    id: 7,
                    name: "Desain Banner",
                    icon: "fas fa-image",
                    description: "Jasa pembuatan banner untuk promosi usaha, media sosial, atau event.",
                    variants: [
                        { name: "Banner Sosmed", price: 10000 },
                        { name: "Banner Event", price: 10000 },
                        { name: "Banner Promosi", price: 5000 }
                    ]
                },
                {
                    id: 8,
                    name: "Desain Poster",
                    icon: "fas fa-scroll",
                    description: "Jasa desain poster kreatif untuk kebutuhan bisnis, acara, atau publikasi.",
                    variants: [
                        { name: "Poster A4", price: 20000 },
                        { name: "Poster A3", price: 35000 }
                    ]
                },
                {
                    id: 9,
                    name: "Aplikasi Bug",
                    icon: "fas fa-laptop-code",
                    description: "Jasa Pembuatan Aplikasi Bug Untuk Aplikasi Bug whatsapp Dengan Desain Modern.",
                    variants: [
                        { name: "Tampilan Simple", price: 25000 },
                        { name: "Tampilan Neon", price: 50000 },
                        { name: "Full Fitur", price: 70000 }
                    ]
                },
                {
                    id: 10,
                    name: "Desain Kartu Nama",
                    icon: "fas fa-id-card",
                    description: "Jasa desain kartu nama profesional untuk bisnis atau personal branding.",
                    variants: [
                        { name: "Basic", price: 10000 },
                        { name: "Premium", price: 20000 }
                    ]
                }
            ],
            "TopUp E-Wallet": [
                {
                    id: 11,
                    name: "Dana",
                    icon: "fas fa-money-bill-wave",
                    description: "Solusi Topup / Convert Dana tercepat dan terpercaya.",
                    variants: [
                        { name: "Dana Rp10.000", price: 11000},
                        { name: "Dana Rp25.000", price: 26000 },
                        { name: "Dana Rp35.000", price: 36000 },
                        { name: "Dana Rp45.000", price: 46000 },
                        { name: "Dana Rp50.000", price: 51000 },
                        { name: "Dana Rp75.000", price: 76000 },
                        { name: "Dana Rp100.000", price: 101000 },
                        { name: "Dana Rp125.000", price: 126000 },
                        { name: "Dana Rp150.000", price: 151000 },
                        { name: "Dana Rp200.000", price: 201000 }
                    ]
                },
                {
                    id: 12,
                    name: "Ovo",
                    icon: "fas fa-credit-card",
                    description: "Solusi Topup Saldo Ovo tercepat dan terpercaya.",
                    variants: [
                        { name: "Ovo Rp10.000", price: 11000},
                        { name: "Ovo Rp25.000", price: 26000 },
                        { name: "Ovo Rp35.000", price: 36000 },
                        { name: "Ovo Rp45.000", price: 46000 },
                        { name: "Ovo Rp50.000", price: 51000 },
                        { name: "Ovo Rp75.000", price: 76000 },
                        { name: "Ovo Rp100.000", price: 101000 },
                        { name: "Ovo Rp125.000", price: 126000 },
                        { name: "Ovo Rp150.000", price: 151000 },
                        { name: "Ovo Rp200.000", price: 201000 }
                    ]
                },
                {
                    id: 13,
                    name: "Gopay",
                    icon: "fas fa-wallet",
                    description: "Solusi Topup Gopay tercepat dan terpercaya.",
                    variants: [
                        { name: "Gopay Rp10.000", price: 11000},
                        { name: "Gopay Rp25.000", price: 26000 },
                        { name: "Gopay Rp35.000", price: 36000 },
                        { name: "Gopay Rp45.000", price: 46000 },
                        { name: "Gopay Rp50.000", price: 51000 },
                        { name: "Gopay Rp75.000", price: 76000 },
                        { name: "Gopay Rp100.000", price: 101000 },
                        { name: "Gopay Rp125.000", price: 126000 },
                        { name: "Gopay Rp150.000", price: 151000 },
                        { name: "Gopay Rp200.000", price: 201000 }
                    ]
                },
                {
                    id: 14,
                    name: "ShopePay",
                    icon: "fas fa-wallet",
                    description: "Solusi Topup Shopepay tercepat dan terpercaya.",
                    variants: [
                        { name: "ShopePay Rp10.000", price: 11000},
                        { name: "ShopePay Rp25.000", price: 26000 },
                        { name: "ShopePay Rp35.000", price: 36000 },
                        { name: "ShopePay Rp45.000", price: 46000 },
                        { name: "ShopePay Rp50.000", price: 51000 },
                        { name: "ShopePay Rp75.000", price: 76000 },
                        { name: "ShopePay Rp100.000", price: 101000 },
                        { name: "ShopePay Rp125.000", price: 126000 },
                        { name: "ShopePay Rp150.000", price: 151000 },
                        { name: "ShopePay Rp200.000", price: 201000 }
                    ]
                }
            ]
        };
