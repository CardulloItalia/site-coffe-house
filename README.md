# Coffè House Site
Sito vetrina per un coffè house 

## 🙃 Caratteristiche 
- ✅ **Database** con Supabase + PostgreSQL
- ✅ **Styling** con TailwindCSS
- ✅ **Type Safety** con TypeScript
- ✅ **Server Components** e Client Components

## 🚧 Tecnologie

**Framework**
- Next.js 14
- TypeScript

**Styling:**
- Tailwind CSS

**Database**
- PostgreSQL / Supabase


## 📁 Struttura del Progetto

```
my-nextjs-app/
├── app/                    # App Router (Next.js 13+)   
│   │       
│   ├── globals.css        # Stili globali
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx          # Home page
├── components/            # Componenti riutilizzabili
│   ├── Footer/               
│   │   |── footer.tsx
│   ├── magicui/  
|   |   ├── marquee.tsx   # marquee package styling     
│   └── MainSection/        
|   |   ├── maincsection.tsx
|   └── NavBar/        
|   |   ├── navbar.tsx
|   └── ShopProduct/        
|   |   ├── shopProduct.tsx
|   └── TheSayAboutUs/
|   |   ├── ShopProduct/        
|   |   |       ├── shopProduct.tsx
|       |── thesayaboutus.tsx
├── lib/                 
│   ├── utils.ts         # Utility functions
├── types/              # TypeScript definitions
│   ├── clientDB.ts
├── service/             #servizi per il DB
│   ├── fetchDataClient.ts
|–– utils/             #connessione a supabase
│   ├── supabase.ts
│  
├── public/             # Static assets
│   ├── images/
│   └── icons/
├── .env.local         # Variabili d'ambiente
├── next.config.js     # Configurazione Next.js
├── tailwind.config.js # Configurazione Tailwind
├── tsconfig.json      # Configurazione TypeScript
└── package.json
```

