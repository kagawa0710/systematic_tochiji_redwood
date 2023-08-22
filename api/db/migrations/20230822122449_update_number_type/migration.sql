-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meeting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prefecture" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "datetime" DATETIME NOT NULL,
    "title" TEXT NOT NULL
);
INSERT INTO "new_Meeting" ("datetime", "day", "id", "month", "number", "prefecture", "title", "volume", "year") SELECT "datetime", "day", "id", "month", "number", "prefecture", "title", "volume", "year" FROM "Meeting";
DROP TABLE "Meeting";
ALTER TABLE "new_Meeting" RENAME TO "Meeting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
