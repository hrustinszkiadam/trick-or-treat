# Csokit vagy Csalunk

A "Csokit vagy Csalunk" egy webalkalmazás, amely lehetővé teszi a felhasználók számára, hogy felfedezzék a cukorkát osztó házakat, illetve jelezzék, ha elfogyott a cukorkájuk. A ház tulajdonosok felvihetik címeiket, megadhatják a cukorkák mennyiségét és az esetleges allergéneket, amikre tudnak alternatívát nyújtani.

Az alkalmazás elérhető a következő linken: [trickortreat.hrustinszki.tech](https://trickortreat.hrustinszki.tech)

## Fejlesztői környezet beállítása

### Klónozd a repót

```bash
git clone https://github.com/hrustinszkiadam/trick-or-treat.git
cd trick-or-treat
```

### Telepítsd a csomagokat

```bash
npm install
```

### Állítsd be a környezeti változókat

Másold a `.env.example` fájlt `.env` néven

### Indítsd el az adatbázist (beépített docker-compose fájl használatával)

```bash
npm run db:start
```

> Ha saját PostgreSQL szervert használsz, győződj meg róla, hogy a `.env` fájlban a `DATABASE_URL` helyesen van beállítva a helyi adatbázisodhoz.
> Ha már fut egy adatbázis, le lehet állítani az `npm run db:stop` paranccsal.

### Indítsd el a fejlesztői szervert

```bash
npm run dev
```

## Adatbázis seedelése

A weboldalnak beépített, jelszóval (`password=petrik`) védett seedelési funkciója van. Ez feltölti az adatbázist 50 példa címmel.

A seedeléshez használd a következő linket: [trickortreat.hrustinszki.tech/api/seed](https://trickortreat.hrustinszki.tech/seed?password=petrik)

## Adatbázis kezelése Drizzle Kit-tel

Az adatbázis kezeléséhez a Drizzle Kit eszközt használjuk. Az alábbi parancsok érhetők el:

- `npm run db:push`: Alkalmazza a sémaváltozásokat az adatbázisra.
- `npm run db:studio`: Elindítja a Drizzle Studio-t az adatbázis kezelésére és adatok megjelenítésére.
