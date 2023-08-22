/*
  Warnings:

  - You are about to drop the column `ine` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `utterance` on the `Meeting` table. All the data in the column will be lost.
  - Added the required column `line` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `utterance` to the `Comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datetime` to the `Meeting` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "originId" INTEGER NOT NULL,
    "line" INTEGER NOT NULL,
    "utterance" TEXT NOT NULL,
    "meetingId" INTEGER NOT NULL,
    "speakerId" INTEGER NOT NULL,
    CONSTRAINT "Comment_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "Meeting" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_speakerId_fkey" FOREIGN KEY ("speakerId") REFERENCES "Speaker" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("id", "meetingId", "originId", "speakerId") SELECT "id", "meetingId", "originId", "speakerId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_Meeting" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prefecture" TEXT NOT NULL,
    "volume" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "datetime" DATETIME NOT NULL,
    "title" TEXT NOT NULL
);
INSERT INTO "new_Meeting" ("day", "id", "month", "number", "prefecture", "title", "volume", "year") SELECT "day", "id", "month", "number", "prefecture", "title", "volume", "year" FROM "Meeting";
DROP TABLE "Meeting";
ALTER TABLE "new_Meeting" RENAME TO "Meeting";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
