/*
  Warnings:

  - You are about to drop the column `Name` on the `Speaker` table. All the data in the column will be lost.
  - Added the required column `name` to the `Speaker` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Speaker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Speaker" ("description", "id", "url") SELECT "description", "id", "url" FROM "Speaker";
DROP TABLE "Speaker";
ALTER TABLE "new_Speaker" RENAME TO "Speaker";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
